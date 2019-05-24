from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db import models
from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


class VerifiedUser(AbstractUser):
    userhash = models.TextField(max_length=512, null=True, blank=True)
    is_active = models.BooleanField(default=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.email = self.username

    def set_hash(self):
        hash_user = make_password(self.username)
        self.userhash = hash_user[34:]
        self.save(commit=True)
        msg = settings.CURRENT_DOMAIN_NAME_MAIN+'auth/otp' + self.userhash
        send_mail("Login OTP", msg, "cusathostel@gmail.com", [self.username], fail_silently=False)
        return self.userhash


class ApplicationSettings(models.Model):
    active_applications = models.BooleanField(default=False)