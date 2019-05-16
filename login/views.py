import smtplib
import socket

from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import VerifiedUser
from .forms import UserForm, OTPForm, LoginForm
from django.core.mail import send_mail
from django.conf import settings


class AuthenticationView(LoginView):
    template_name = 'login/login.html'
    form_class = LoginForm
    extra_context = {
        'form1': UserForm

    }
    redirect_authenticated_user = True

    def get_success_url(self):
        return "/apply/"

    def post(self, request, *args, **kwargs):
        print(request.POST)
        try:
            verifieduser = VerifiedUser.objects.get(username=request.POST['username'])
            if (verifieduser.is_active):
                return super().post(request, *args, **kwargs)

            context = {'error_heading': 'A Verification link has been sent to your email account',
                       'error_message': 'Please click on the link that has been sent to your email account to verify '
                                        '   your email and continue login again'}
        except VerifiedUser.DoesNotExist:

            context = {'error_heading': 'Seems like your are not registered yet' ,
                       'error_message': 'Please SignUp to continue'}
        return render(request, 'login/login.html', context=context)


def register(request):
    if request.method == 'POST':
        OTLink = make_password(request.POST['username'])
        msg = (OTLink[34:])
        msg = 'http//:127.0.0.1:8000/otp?otp=' + msg
        context = {
            "form": LoginForm
        }
        user = UserForm(request.POST)
        if (user.is_valid()):
            user.save()
            return HttpResponseRedirect('/')
        else:
            context["form1"] = user
            user.show_error = True
            return render(request, 'login/login.html', context=context)

    else:
        return HttpResponseRedirect("/")


def verification(request, token):
    print(token)
    verifying_user = VerifiedUser.objects.get(userhash=token)
    verifying_user.is_active = True
    verifying_user.save()
    return HttpResponseRedirect('/')
