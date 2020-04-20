from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import recipe
from rest_framework.response import Response
from rest_framework.generics import (ListAPIView, CreateAPIView, RetrieveAPIView, ListCreateAPIView,UpdateAPIView)
from rest_framework import viewsets
from .serializers import recipeSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication, BasicAuthentication, SessionAuthentication
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.decorators import permission_classes
from rest_framework import status, filters
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

# viewsets does not provide method post or get , instead provides create, list

class listapiview(ListAPIView):
    queryset = recipe.objects.all()
    serializer_class = recipeSerializer

@permission_classes((IsAuthenticated,))
class recipeviewset(viewsets.ModelViewSet):
    queryset = recipe.objects.all()
    serializer_class = recipeSerializer
    authentication_classes=[TokenAuthentication]
    def perform_create(self, serializer):
        re = serializer.save(owner=self.request.user)
        return Response({'re':re})

# @permission_classes((AllowAny))
class searchrecipe(ListAPIView):
    queryset = recipe.objects.all()
    serializer_class = recipeSerializer
    filter_backends = (DjangoFilterBackend,)  #iske bina bhi kam chalraha h
    filterset_fields = ('name',)
    # search_fields = ['name']
    lookup_field='name'

class updaterecipe(UpdateAPIView):
    queryset = recipe.objects.all()
    serializer_class = recipeSerializer
    lookup_field = 'name'

@permission_classes((AllowAny,))
class userviewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer




class getapiview(APIView):
    queryset = recipe.objects.all()                             
    serializer_class = recipeSerializer      
    # lookup_url_kwarg = ""

class userrecipes(RetrieveAPIView):
    def get(self,request):
        obj = recipe.objects.filter(user = request.user)
        serializer = recipeSerializer(obj)
        return Response({'serializer':serializer})
    
# get and post methods are used with apiviews 
# we can use (serializer['owner']=request.user) with apiviews but not with viewsets
class createrecipe(ListCreateAPIView):
    queryset = recipe.objects.all()
    serializer_class = recipeSerializer
    # def get(self, request):
    #     obj = recipe.objects.all()
    #     serializer = recipeSerializer(recipe)
    #     return Response({'serializer': serializer})
    # def post(self,request):
    #     obj = recipeSerializer(data = request.data)
    #     obj['owner']=request.user
    #     if obj.is_valid():
    #         obj.save()
    #     else:
    #         pass
    #     return Response({"data":obj})


















