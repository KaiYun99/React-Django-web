from cgi import test
from os import stat
from urllib import request
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from ..serializers import *
from ..models import *
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from datetime import datetime
# Create your views here.

@api_view(['GET']) 
def ReactView(request):
    test_output = React.objects.all()
    test_output_serialized = ReactSerializer(test_output, many=True)
    test_output_data = test_output_serialized.data
    return Response(test_output_data, status=status.HTTP_200_OK)