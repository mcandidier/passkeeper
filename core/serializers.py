from rest_framework import serializers
from django.contrib.auth.models import User 
from .utils import decrypt_password

from .models import Item

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name']

class ItemSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    raw_password = serializers.SerializerMethodField()


    class Meta:
        model = Item
        fields = ['id','name', 'password', 'url', 'user', 'icon', 'raw_password']
        read_only_fields = ['user', 'raw_password']

    def get_user(self, obj):
        return obj.user.id

    def get_raw_password(self, obj):
        password = decrypt_password(obj)
        return password.decode()



