from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor

class Listing(models.Model):
    class SaleType(models.TextChoices):
        PARA_VENDER = 'A venda'
        PARA_ALUGAR = 'Aluguel'

    class HomeType(models.TextChoices):
            CASA = 'Casa'
            CONDOMÍNIO = 'Condomínio'
            APARTAMENTO = 'Apartamento'

    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique = True)
    titulo = models.CharField(max_length=150)
    endereco = models.CharField(max_length=150)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    CEP = models.CharField(max_length=15)
    descricao = models.TextField(blank = True)
    tipo_venda = models.CharField(max_length=50,choices=SaleType.choices,default=SaleType.PARA_VENDER)
    preco = models.IntegerField()
    quartos = models.IntegerField()
    banheiros = models.DecimalField(max_digits=2,decimal_places=1)
    tipo_casa = models.CharField(max_length=50, choices=HomeType.choices, default=HomeType.CASA)
    m2 = models.IntegerField()
   
    photo_main = models.ImageField(upload_to = 'photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_4= models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_7 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_8 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_9 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_10 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_11 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_12 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_13 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_14 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_15 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_16 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_17 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_18 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_19 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo_20 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    publicado = models.BooleanField(default=True)
    data_publicacao = models.DateTimeField(default = now, blank=True)

    def __str__(self):
        return self.titulo


