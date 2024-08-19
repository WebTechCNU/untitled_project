from django.urls import path, include
from .views import *

urlpatterns = [
    path('login/', login_view, name="Main"),
    path('register/', register_view, name="Main"),
    path('logout/', logout_view, name="Main"),
]