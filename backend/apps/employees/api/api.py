from rest_framework.generics import ListAPIView, ListCreateAPIView, CreateAPIView
from rest_framework.views import APIView
from apps.employees.models import employee
from apps.employees.api.serializers import EmployeeGetSerializer, EmployeePostSerializer
from django.http import HttpResponse
from rest_framework.response import Response


class employeeGetAPIView(ListAPIView):
    serializer_class = EmployeeGetSerializer
    def get(self, request):
        serializer = EmployeeGetSerializer
        queryset = employee.objects.all()
        return Response(queryset)

class employeePostAPIView(CreateAPIView):
    serializer_class = EmployeePostSerializer

    def post(self, request):

        employee_data = request.data
        if employee_data['country'] == 'col':
            domain = 'cidenet.com.col'
        else:
            domain = 'cidenet.com.us'
        email = employee_data['first_name'] + '.' + employee_data['last_name'].replace(" ", "") + '@' + domain
        startsEmail = employee_data['first_name'] + '.' + employee_data['last_name'].replace(" ", "")
        repeated_emails = employee.objects.filter(email__startswith = startsEmail).count()
        if repeated_emails != 0:
            print(repeated_emails)
            email = employee_data['first_name'] + '.' + employee_data['last_name'].replace(" ", "") + str(repeated_emails) + '@' + domain
        employee_data['email'] = email
        serializer = EmployeeGetSerializer(data=employee_data)

        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


