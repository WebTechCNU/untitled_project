from django.urls import path, include
from .views import *

urlpatterns = [
    path('', main_view, name="Home"),
    path('registers/', register, name="Registration")
]