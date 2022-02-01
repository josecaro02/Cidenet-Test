from rest_framework.generics import ListCreateAPIView
from apps.id_type.models import id_type
from apps.id_type.api.serializers import IdTypeSerializer

class IdTypeAPIView(ListCreateAPIView):
    serializer_class = IdTypeSerializer
    queryset = id_type.objects.all()
