from django.urls import path, include
from knox import view as knox_views

urlpatthers = [
    path('api/auth', include('knox.urls'))
]
