from django.urls import path

from . import views

app_name = "Homapage"
urlpatterns = [
    path('', views.homepage, name='homepage')

]
