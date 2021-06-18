# Generated by Django 3.2 on 2021-05-26 16:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realtors', '0002_auto_20210525_1341'),
    ]

    operations = [
        migrations.CreateModel(
            name='Corretor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
                ('foto', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('descricao', models.TextField(blank=True)),
                ('telefone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=100)),
                ('top_seller', models.BooleanField(default=False)),
                ('data_de_contratacao', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
