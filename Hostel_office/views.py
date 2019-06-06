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
    departments = [
        "Choose department",
        "DDU Kaushal Kendras (DDUKK)",
        "Department of Applied Chemistry",
        "Department of Applied Economics",
        "Department of Atmospheric Sciences",
        "Department of Biotechnology",
        "Department of Chemical Oceanography",
        "Department of Computer Applications",
        "Department of Computer Science",
        "Department of Electronics",
        "Department of Hindi",
        "Department of Instrumentation",
        "Department of Marine Biology, Microbiology and Biochemistry",
        "Department of Marine Geology and Geophysics",
        "Department of Mathematics",
        "Department of Physical Oceanography",
        "Department of Physics",
        "Department of Polymer Science and Rubber Technology",
        "Department of Ship Technology",
        "Department of Statistics",
        "Inter University Centre for IPR Studies (IUCIPRS)",
        "International School of Photonics",
        "National Centre for Aquatic Animal Health (NCAAH)",
        "School of Engineering",
        "School of Environmental Studies",
        "School of Industrial Fisheries",
        "School of Legal Studies",
        "School of Management Studies"]
    context = {
        "departments": departments,
        "models": Applications.objects.all()
    }
    return render(request, 'Hostel_office/index.html', context)


def get_data(request):
    # print(request.POST)
    models = Applications.objects.all().filter(Department=request.POST['dept'], Course_of_study=request.POST['course'],
                                               Gender=request.POST['gender'])
    # print(models)
    return render(request, 'Hostel_office/get_data.html', {'models': models})


def save_data(request):
    select = request.POST['select']
    reg = request.POST['reg']
    ischeck = request.POST['ischeck']
    room = request.POST['room']
    print(ischeck)
    models = Applications.objects.get(Registration_No=reg)
    if ischeck == 'true':
        if select != "":
            models.admitted = 1
            models.Hostel_admitted = select
            models.Room_No = room
    else:
        models.admitted = 0
        models.Hostel_admitted = None
        models.Room_No = 0
    models.save()
    return HttpResponse("hello")


def add_dept(request):
    departments = [
        "Choose department",
        "DDU Kaushal Kendras (DDUKK)",
        "Department of Applied Chemistry",
        "Department of Applied Economics",
        "Department of Atmospheric Sciences",
        "Department of Biotechnology",
        "Department of Chemical Oceanography",
        "Department of Computer Applications",
        "Department of Computer Science",
        "Department of Electronics",
        "Department of Hindi",
        "Department of Instrumentation",
        "Department of Marine Biology, Microbiology and Biochemistry",
        "Department of Marine Geology and Geophysics",
        "Department of Mathematics",
        "Department of Physical Oceanography",
        "Department of Physics",
        "Department of Polymer Science and Rubber Technology",
        "Department of Ship Technology",
        "Department of Statistics",
        "Inter University Centre for IPR Studies (IUCIPRS)",
        "International School of Photonics",
        "National Centre for Aquatic Animal Health (NCAAH)",
        "School of Engineering",
        "School of Environmental Studies",
        "School of Industrial Fisheries",
        "School of Legal Studies",
        "School of Management Studies"]
    context = {
        "departments": departments,
        "models": Applications.objects.all()
    }
    return render(request, 'Hostel_office/add_data.html', context)

def create(request):
    print('1')
    HttpResponse('hiiii')