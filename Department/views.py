from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse
from django.shortcuts import render
import requests, json
from Application.models import Applications
from login.models import VerifiedUser


def test(user):
    if user.Department_portal != "student":
        return True
    return False


# Create your views here.
@login_required(redirect_field_name='/auth/')
@user_passes_test(test, redirect_field_name='/')
def index(request):
    department = request.user.Department_portal
    accecible = request.user.Accessible
    acceciblelist = accecible.split(",")[:-1]
    return render(request, 'Department/index.html', {"courses": acceciblelist})


# def process_data(request):
#     pass

@login_required(redirect_field_name='/auth/')
@user_passes_test(test, redirect_field_name='/')
def get_data(request):
    models = Applications.objects.all().filter(Department=request.user.Department_portal,
                                               Course_of_study=request.POST['course'])

    sortedmodels = sorted(models, key=lambda x: x.create_priority_value())
    return render(request, 'Department/get_data.html', {'models': sortedmodels})


@login_required(redirect_field_name='/auth/')
@user_passes_test(test, redirect_field_name='/')
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
    print(pin)
    source = "682022"
    if (pin == "682022"):
        models.distance = 0
    else:
        dest = str(pin)
        link = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + source + "&destinations=" + dest + "&key=AIzaSyCE69Rb-G9LtjgZ1EEx2qyN19xpNj67_JI"
        r = requests.get(link)
        y = r.json()
        dist = y["rows"][0]["elements"][0]["distance"]["text"]
        dist = dist[0:len(dist) - 3]
        dist = float(dist)
        print(dist)
        models.distance = dist
    models.save()
    return HttpResponse("hello")


@login_required(redirect_field_name='/auth/')
@user_passes_test(test, redirect_field_name='/')
def priority(request):
    course = request.POST['course']
    user = (request.user)
    department = request.user.Department_portal;
    models = Applications.objects.all().filter(Department=department, Course_of_study=course,
                                               verified_department='1', year_back='0')
    models_valid = []
    for i in models:
        if i.distance_valid():
            models_valid.append(i)

    print(models_valid)
    sortedmodels = sorted(models_valid, key=lambda x: x.create_priority_value(), reverse=True)
    print(sortedmodels)
    return render(request, 'Department/priority.html', {'models': sortedmodels, 'Department': department,
                                                        'Course': course})
