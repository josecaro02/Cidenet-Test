from rest_framework.generics import ListAPIView
from apps.employees.models import employee
from apps.employees.api.serializers import EmployeeGetSerializer

class employeeGetAPIView(ListAPIView):
    serializer_class = EmployeeGetSerializer
    queryset = employee.objects.all()
