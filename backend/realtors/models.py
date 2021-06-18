from django.db import models
from datetime import datetime

class Realtor(models.Model):
    nome = models.CharField(max_length =50)
    foto = models.ImageField(upload_to='photos/%Y/%m/%d/')
    descricao = models.TextField(blank = True)
    telefone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    top_seller = models.BooleanField(default=False)
    data_de_contratacao = models.DateTimeField(default = datetime.now, blank=True)
    def __str__(self):
        return self.nome

