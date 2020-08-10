from rest_framework import serializers
from tutors.models import Tutor

# Tutor serializer


class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = '__all__'
