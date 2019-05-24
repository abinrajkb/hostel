from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse
from django.shortcuts import render

from Application.models import Applications


def test(user):
    return False


# Create your views here.

def index(request):
    obj = Applications.objects.all()
    return render(request, 'Department/index.html', {'models': obj})

#
# def process_data(request):
#     pass