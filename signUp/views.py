from django.shortcuts import redirect, render
from django.contrib.auth import logout
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request,"home.html")

def logout_view(request):
    logout(request)
    return redirect("/")
    


def home_page(request):
    return render(request,'index.html')

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

def agreement(request):
    return render(request,'agree.html')