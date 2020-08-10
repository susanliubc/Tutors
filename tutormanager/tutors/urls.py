from rest_framework import routers
from .api import TutorViewSet

router = routers.DefaultRouter()
router.register('api/tutors', TutorViewSet, 'tutors')

urlpatterns = router.urls
