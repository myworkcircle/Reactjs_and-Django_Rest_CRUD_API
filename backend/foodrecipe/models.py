from django.db import models
from django.contrib.auth.models import User

class recipe(models.Model):
    name = models.CharField(max_length=256)
    owner = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    time = models.CharField(max_length=256)
    directions = models.CharField(max_length=256)
    ingredients = models.CharField(max_length=256)
    image = models.FileField(upload_to='fileupload',blank=True)
    description = models.CharField(max_length=256)

