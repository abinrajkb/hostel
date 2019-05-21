from django.urls import path

from . import views

app_name = 'Hostel_office'

urlpatterns = [
    path('', views.index, name='index'),
]
