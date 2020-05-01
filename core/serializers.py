from rest_framework import serializers
from django.contrib.auth.models import User 

from .models import Item

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name']

class ItemSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = ['id','name', 'password', 'url', 'user', 'icon']
        read_only_fields = ['user']

    def get_user(self, obj):
        return obj.user.id

