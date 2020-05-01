from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save

from .models import Config, Item
from .utils import encrypt_password

@receiver(post_save, sender=User)
def create_user_config(sender, instance, created, **kwargs):
    if created:
        Config.objects.create(user=instance)

@receiver(post_save, sender=Item)
def create_password(sender, instance, created, **kwargs):
    if created:
        encrypted = encrypt_password(instance)
        instance.password = encrypted.decode()
        instance.save()
    

# @receiver(post_save, sender=Item)
# def create_favicon(sender, instance, created, **kwargs):
#     # if created:
#     icons = favicon.get(instance.url)
#     icon = icons[0]
#     temp = NamedTemporaryFile(delete=True)
#     temp.write(urlopen(icon.url).read())
#     temp.flush()
#     instance.icon.save(f"icon-{instance.id}", File(temp))
