import os
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.conf import settings

from .utils import generate_key


class Item(models.Model):
    """ Item models
    """
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200, blank=True) 
    url = models.URLField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'


class Config(models.Model):
    """ Config model
    """
    key = models.CharField(default=generate_key(), editable=False, max_length=200)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='config')
