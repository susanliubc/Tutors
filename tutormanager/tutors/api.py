from tutors.models import Tutor
from rest_framework import viewsets, permissions
from .serializer import TutorSerializer


class TutorViewSet(viewsets.ModelViewSet):
    queryset = Tutor.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TutorSerializer
