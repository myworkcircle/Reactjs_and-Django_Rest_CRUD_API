from rest_framework import serializers
from .models import recipe
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class recipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = recipe
        fields = '__all__'
    # def create(self,validated_data,*args,**kwargs):
    #     recip = recipe.objects.create(**validated_data)
    #     recip.owner=self.user   #not allowed here cannot modify data in serializers
    #     return recip

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']
        extra_kwargs={'password':{'write_only':True, 'required':True}}
    def create(self, validated_data):
        user=User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user