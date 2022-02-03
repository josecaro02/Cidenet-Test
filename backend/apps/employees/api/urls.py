from django.urls import path
from apps.employees.api.api import employeeGetAPIView, employeePostAPIView

urlpatterns = [
    path('employee/', employeeGetAPIView.as_view(), name = 'employee_get'),
    path('employeePost/', employeePostAPIView.as_view(), name='employee_post')
]