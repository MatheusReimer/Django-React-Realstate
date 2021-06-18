from django.contrib import admin
from .models import Listing

class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo','publicado','preco','data_publicacao','realtor')
    list_display_links = ('id', 'titulo')
    list_filter = ('realtor', )
    list_editable = ('publicado',)
    searchFields = ('titulo','descricao','endereco','cidade','estado','CEP','preco')
    list_per_page = 25


admin.site.register(Listing, ListingAdmin)