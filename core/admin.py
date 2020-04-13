from django.contrib import admin
from .models import Config, Item

from .utils import decrypt_password

@admin.register(Config)
class ConfigAdmin(admin.ModelAdmin):
    list_display = ('user', 'key')



@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'password', 'decrypt_password']

    def decrypt_password(self, instance):
        password = decrypt_password(instance)
        return password