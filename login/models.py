from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db import models
from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser

import smtplib
from random import choice

# creates SMTP session
def send_email(message,reciver):
    emails = ["cusathostel@gmail.com","cusathostels@gmail.com","cusatuniversityhostel@gmail.com","cusatuniversityhostels@gmail.com"]
    s = smtplib.SMTP('smtp.gmail.com', 587)
    email = choice(emails)
    # start TLS for security
    s.starttls()
    # Authentication
    s.login(email, "hostelmanagement@cusat")

    # message to be sent

    # sending the mail
    s.sendmail(email,reciver, message)

    # terminating the session
    s.quit()

class VerifiedUser(AbstractUser):
    userhash = models.TextField(max_length=512, null=True, blank=True)
    is_active = models.BooleanField(default=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.email = self.username

    def set_hash(self):
        hash_user = make_password(self.username)
        self.userhash = hash_user[34:]
        self.save()
        msg = "your  verification otp    " +settings.CURRENT_DOMAIN_NAME_MAIN+'auth/otp' + self.userhash
        send_email( msg,self.username)
        return self.userhash

    def reset_hash(self):
        hash_user = make_password(self.username)
        self.userhash = hash_user[34:]
        self.save()
        msg = "your password reset otp    " + settings.CURRENT_DOMAIN_NAME_MAIN+'auth/reset' + self.userhash
        send_email( msg,self.username)
        return self.userhash

class ApplicationSettings(models.Model):
    active_applications = models.BooleanField(default=False)