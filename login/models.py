from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db import models


class VerifiedUser(User):

    userhash = models.TextField(max_length=512,null=True,blank=True)
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.email = self.username
        self.is_active =False


    def set_hash(self):
        hash_user = make_password(self.username)
        self.userhash = hash_user[34:]
        msg = 'http//:127.0.0.1:8000/otp' + self.userhash
        print("hello")
        send_mail("Login OTP",msg,"cusathostel@gmail.com",[self.username] ,fail_silently=False)
        print("hello")
        return self.userhash