from django.urls import path

from base.views import react_views as views

urlpatterns = [
    path('view/', views.ReactView, name='view'),
    #path('create/', views.GetSpell.as_view()),
]