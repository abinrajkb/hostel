from django.urls import path, re_path

from . import views

from django.contrib.auth import views as auth_views
urlpatterns = [
    re_path(r'^$', views.AuthenticationView.as_view(), name='index'),
    path('register/', views.register, name='register'),
    path('logout/', auth_views.LogoutView.as_view(), name='Logout'),
    re_path(r'^otp(.*)/$', views.verification, name='path')
]
