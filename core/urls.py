from django.urls import path, include

from .views import (
    ItemViewSet,
    ItemChangePasswordView
)

urlpatterns = [
    path('items/', ItemViewSet.as_view({'get': 'lists', 'post': 'create'}), name='items'),
    path('items/<int:id>/', ItemChangePasswordView.as_view({'delete': 'delete'})),
    path('items/<int:id>/update/', ItemChangePasswordView.as_view({'put': 'update_password'}), name='update'),
] 
