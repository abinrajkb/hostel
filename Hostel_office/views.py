from django.contrib.auth.decorators import login_required, user_passes_test
from django.shortcuts import render

def test(user):
    return False

# Create your views here.
@login_required(redirect_field_name='/auth/')
@user_passes_test(test,redirect_field_name='/')
def index(request):
    return render(request,'Hostel_office/index.html')