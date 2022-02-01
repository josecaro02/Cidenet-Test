from rest_framework import serializers
from apps.id_type.models import id_type


class IdTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = id_type
        fields = '__all__'
