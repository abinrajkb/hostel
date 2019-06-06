from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse
from django.shortcuts import render

from Application.models import Applications


def test(user):
    return False


# Create your views here.
# @login_required(redirect_field_name='/auth/')
# @user_passes_test(test, redirect_field_name='/')

def index(request):
    obj = Applications.objects.all()
    return render(request, 'Department/index.html', {'models': obj})


# def process_data(request):
#     pass


def get_data(request):
    # print(request.POST)
    models = Applications.objects.all().filter(Department=request.POST['dept'], Course_of_study=request.POST['course'])
    # print(models)
    return render(request, 'Department/get_data.html', {'models': models})


def save_data(request):
    print("views function")
    pin = request.POST['pin']
    reg = request.POST['reg']
    yearback = request.POST['yearback']
    category = request.POST['category']
    models = Applications.objects.get(Registration_No=reg)
    models.Pincode = pin
    if yearback == "true":
        models.year_back = 1
    else:
        models.year_back = 0
    if category == "true":
        models.category_isvalid = 1
    else:
        models.category_isvalid = 0
    models.verified_department = 1
    models.save()
    return HttpResponse("hello")
