from django.urls import path
from apps.employees.api.api import employeeGetAPIView

urlpatterns = [
    path('employee/', employeeGetAPIView.as_view(), name = 'id_type')
]