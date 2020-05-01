from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from django.views.generic import TemplateView

from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('core.endpoints')),
    path('api-token-auth/', views.obtain_auth_token),
    path('', TemplateView.as_view(template_name='index.html'))

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
