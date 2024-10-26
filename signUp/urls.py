from django.urls import path,include
from . import views



urlpatterns = [
    # path("",views.home),
    # path("logout",views.logout_view),
    path('home-page',views.home_page,name='homepage'),
    path('login',views.login,name="login"),
    path('register',views.register,name="register"),
    path('agreement',views.agreement,name="agreement"),
       
]