from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse
from django.shortcuts import render

from Application.models import Applications


def test(user):
    if user.Department_portal!="student":
        return True
    return False


# Create your views here.
@login_required(redirect_field_name='/auth/')
@user_passes_test(test, redirect_field_name='/')
def index(request):
    department = request.user.Department_portal
    accecible = request.user.Accessible
    acceciblelist = accecible.split(",")[:-1]
    return render(request, 'Department/index.html', {"courses":acceciblelist})


# def process_data(request):
#     pass

@login_required(redirect_field_name='/auth/')
@user_passes_test(test, redirect_field_name='/')
def get_data(request):
    # print(request.POST)
    models = Applications.objects.all().filter(Department=request.user.Department_portal, Course_of_study=request.POST['course'])
    sortedmodels = sorted(models, key=lambda x: x.create_priority_value())
    # print(models)
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
    models.save()
    return HttpResponse("hello")

