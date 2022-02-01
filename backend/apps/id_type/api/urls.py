from django.urls import path
from apps.id_type.api.api import IdTypeAPIView

urlpatterns = [
    path('id_type/', IdTypeAPIView.as_view(), name = 'id_type')
]