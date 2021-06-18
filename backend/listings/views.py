from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, ListingDetailSerializer
from datetime import datetime, timezone, timedelta

class ListingsView(ListAPIView):
    queryset = Listing.objects.order_by('-data_publicacao').filter(publicado=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'


class  ListingView(RetrieveAPIView):
    queryset = Listing.objects.order_by('-data_publicacao').filter(publicado=True)
    serializer_class = ListingDetailSerializer
    lookup_field = 'slug'


class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer

    def post(self, request, format=None):
        queryset = Listing.objects.order_by('-data_publicacao').filter(publicado=True)
        data = self.request.data

        tipo_venda = data['tipo_venda']
        queryset = queryset.filter(tipo_venda__iexact=tipo_venda)
        # PEGA DO BANCO DE DADOS E COMPARA O TIPO DE VENDA QUE BATE COM O QUE FOI SELECIONADO NA INTERFACE

        preco = data['preco']

        if preco=='R$100.000,00+':
            preco=100000            

        elif preco=='R$200.000,00+':
            preco=200000
        elif preco=='R$400.000,00+':
            preco=400000
        elif preco=='R$600.000,00+':
            preco=600000
        elif preco=='R$800.000,00+':
            preco=800000
        elif preco=='R$1.000.000,00+':
            preco=1000000
        elif preco=='R$1.200.000,00+':
            preco=1200000
        elif preco=='R$1.500.000,00+':
            preco=1500000
        elif preco=='Qualquer':
            preco=-1

        if preco != -1:
            queryset = queryset.filter(preco__gte=preco)

        quartos = data['quartos']
        if quartos == '0+':
            quartos=0
        elif quartos == '1+':
            quartos=1
        elif quartos == '2+':
            quartos=2
        elif quartos == '3+':
            quartos=3
        elif quartos == '4+':
            quartos=4
        elif quartos == '5+':
            quartos=5

        queryset=queryset.filter(quartos__gte=quartos)



        tipo_casa = data['tipo_casa']
        queryset = queryset.filter(tipo_casa__iexact = tipo_casa)


        banheiros = data['banheiros']
        if banheiros == '0+':
            banheiros=0.0
        elif banheiros == '1+':
            banheiros=1.0
        elif banheiros == '2+':
            banheiros=2.0
        elif banheiros == '3+':
            banheiros=3.0
        elif banheiros == '4+':
            banheiros=4.0
        
        queryset = queryset.filter(banheiros__gte=banheiros)


        m2 = data['m2']
        if m2 == '20+':
            m2 =20
        if m2 == '50+':
            m2 =50
        if m2 == '100+':
            m2 =100
        if m2 == '200+':
            m2 =200
        if m2 == '300+':
            m2 =300
        if m2 == '400+':
            m2 =400
        if m2 == '500+':
            m2 =500
        if m2 == '600+':
            m2 =600
        if m2 == '700+':
            m2 =700
        if m2 == '800+':
            m2 =800
        if m2 == '900+':
            m2 =900
        elif m2 == '1000+':
            m2 =1000
        elif m2 =='1200+':
            m2 =1200
        elif m2 =='1500+':
            m2 =1500
        elif m2 =='2000+':
            m2 =2000
        elif m2 =='Qualquer':
            m2 =0

        if m2!=0:
            queryset = queryset.filter(m2__gte=m2)



        days_passed = data['days_listed']
        if days_passed =='1 ou menos':
            days_passed=1
        elif days_passed =='2 ou menos':
            days_passed=2
        elif days_passed =='5 ou menos':
            days_passed=5
        elif days_passed =='10 ou menos':
            days_passed=10
        elif days_passed =='20 ou menos':
            days_passed=20
        elif days_passed =='Qualquer data':
            days_passed=0

        for query in queryset:
            num_days = (datetime.now(timezone.utc) - query.data_publicacao).days
            
            if days_passed !=0:
                if num_days > days_passed:
                    slug = query.slug
                    queryset = query.exclude(slug__iexact=slug)


        
        has_photos = data['has_photos']
        if has_photos == '1+':
            has_photos=1
        elif has_photos =='3+':
            has_photos=3
        elif has_photos =='5+':
            has_photos=5
        elif has_photos =='10+':
            has_photos=10
        elif has_photos =='15+':
            has_photos=15

        
        for query in queryset:
            count  =0
            if query.photo_1:
                count += 1
            if query.photo_2:
                count += 1
            if query.photo_3:
                count += 1
            if query.photo_4:
                count += 1
            if query.photo_5:
                count += 1
            if query.photo_6:
                count += 1
            if query.photo_7:
                count += 1
            if query.photo_8:
                count += 1
            if query.photo_9:
                count += 1
            if query.photo_10:
                count += 1
            if query.photo_11:
                count += 1
            if query.photo_12:
                count += 1
            if query.photo_13:
                count += 1
            if query.photo_14:
                count += 1
            if query.photo_15:
                count += 1
            if query.photo_16:
                count += 1
            if query.photo_17:
                count += 1
            if query.photo_18:
                count += 1
            if query.photo_19:
                count += 1
            if query.photo_20:
                count += 1



            if count < has_photos:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact=slug)



        keywords = data['keywords']
        queryset = queryset.filter(descricao__icontains=keywords)


        serializer = ListingSerializer(queryset, many=True)
        return Response(serializer.data)