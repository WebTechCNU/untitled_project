from django.shortcuts import render

def main_view(request):
     return render(request, 'index.html')

def register(request):
     return render(request, 'register.html')
