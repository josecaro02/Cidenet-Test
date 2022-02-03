from rest_framework import serializers
from apps.employees.models import employee


class EmployeeGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = employee
        fields = '__all__'

class EmployeePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = employee
        exclude = ('email',)