from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

from .models import Applications
from .forms import ApplicationForm
from login.models import VerifiedUser


@login_required(redirect_field_name='/')
def apply(request):
    context = {
        "form": ApplicationForm()
    }
    return render(request, 'Application/index.html', context)


@login_required(redirect_field_name='/')
def submitted(request):
    user = request.user
    print(user)

    applicationform = ApplicationForm(request.POST, instance=user.applications)
    print(applicationform.errors)
    if applicationform.is_valid():
        applicationform.save()
        return HttpResponse('Hiiiii')
    else:
        context ={
            "form":ApplicationForm(request.POST)
        }
        return render(request, 'Application/index.html', context)
