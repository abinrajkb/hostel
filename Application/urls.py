from django.urls import path

from . import views

urlpatterns = [
    path('', views.apply, name='apply'),
    path('submitted/', views.submitted, name='submitted'),
]
