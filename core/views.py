from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Item
from .utils import encrypt_password, create_item_icon, ItemMixins
from .serializers import ItemSerializer, UserSerializer
from .permissions import IsOwner

class ItemViewSet(ItemMixins, viewsets.ViewSet):
    """ Item viewset for lists of items, and create item.
    """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = ItemSerializer

    def lists(self, *args, **kwargs):
        items = Item.objects.filter(user=self.request.user)
        serializer = self.serializer_class(items, many=True)
        return Response(serializer.data, status=200)

    def create(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        item = serializer.save(user=self.request.user)
        create_item_icon(item)
        return Response(serializer.data, status=201)


class ItemChangePasswordView(ItemMixins, viewsets.ViewSet):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated, IsOwner]

    def get_object(self, *args, **kwargs):
        return get_object_or_404(Item, id=self.kwargs.get('id'))

    def update_password(self, *args, **kwargs):
        obj = self.get_object()
        self.check_object_permissions(self.request, obj)
        password = self.request.data.get('password', None)
        if password is not None:
            encrypted_pass = self.encrypt_password(obj, password)
            obj.password = encrypted_pass.decode()
            obj.save()
            return Response({'updated': True}, status=200)
        return Response({'detail': 'password is required.'}, status=400)