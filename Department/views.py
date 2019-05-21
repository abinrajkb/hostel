from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse
from django.shortcuts import render

from Application.models import Applications


def test(user):
    return False


# Create your views here.
@login_required(redirect_field_name='/auth/')
@user_passes_test(test, redirect_field_name='/')
def index(request):
    obj = Applications.objects.all()
    return render(request, 'Department/index.html', {'obj': obj})
