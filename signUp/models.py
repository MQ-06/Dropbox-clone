from django.db import models


# Create your models here.

class Registration(models.Model):
    username = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField()  
    password = models.CharField(max_length=100) 

    def __str__(self):
        return self.username