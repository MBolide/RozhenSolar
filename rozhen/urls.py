from django.urls import path
from rozhen import views

app_name = 'rozhen'

urlpatterns = [
    path('', views.index, name='index'),
    path('base/', views.base, name='base'),
]
