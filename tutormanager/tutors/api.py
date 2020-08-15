from tutors.models import Tutor
from rest_framework import viewsets, permissions
from .serializer import TutorSerializer


class TutorViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TutorSerializer

    def get_queryset(self):
        return self.request.user.tutor.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
