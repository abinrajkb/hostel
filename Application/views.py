from django.http import HttpResponse
from django.shortcuts import render

from .forms import ApplicationForm


def apply(request):
    context = {
        "form":ApplicationForm()
    }
    return render(request, 'Application/index.html',context)


def submitted(request):
    return HttpResponse('Hiiiii')

