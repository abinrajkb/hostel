from django.urls import path

from . import views

app_name = 'Departments'

urlpatterns = [
    path('', views.index, name='index')
]
