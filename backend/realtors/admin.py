from django.contrib import admin
from .models import Realtor

class RealtorAdmin(admin.ModelAdmin):
    list_display = ('id','nome','email','data_de_contratacao')
    list_display_links = ('id','nome')
    search_fields = ('nome',)
    list_per_page = 25

admin.site.register(Realtor,RealtorAdmin)