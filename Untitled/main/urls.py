from django.urls import path, include
from .views import *

urlpatterns = [
    path('', main_view, name="Main"),
    path('', register, name="Main"),
]