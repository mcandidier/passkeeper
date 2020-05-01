from django.urls import path, include, re_path

from rest_framework import routers


urlpatterns = [
    re_path('^', include('core.urls')),
    # re_path('^', include(users_patterns))
]