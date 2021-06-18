from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Listing
        fields=('titulo','endereco','cidade','estado','preco','tipo_venda','tipo_casa','quartos','banheiros','m2','photo_main','slug')

class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'
        