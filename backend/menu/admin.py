from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'order', 'item_count']
    list_editable = ['order']
    ordering = ['order']

    def item_count(self, obj):
        return obj.products.count()
    item_count.short_description = 'Items'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['photo', 'name', 'category', 'subcategory', 'price', 'is_veg', 'is_available', 'is_bestseller']
    list_editable = ['price', 'is_available', 'is_bestseller']
    list_filter = ['category', 'is_veg', 'is_available', 'is_bestseller']
    search_fields = ['name', 'category__name', 'subcategory']
    list_per_page = 30
    ordering = ['category__order', 'order']
    readonly_fields = ['photo_preview']

    fieldsets = (
        ('Basic Info', {
            'fields': ('category', 'subcategory', 'name', 'description', 'price', 'is_veg', 'is_available', 'is_bestseller', 'order')
        }),
        ('Image', {
            'fields': ('photo_preview', 'image', 'image_url'),
            'description': 'Upload an image OR paste an image URL. Uploaded image takes priority.'
        }),
    )

    def photo(self, obj):
        src = obj.image.url if obj.image else obj.image_url
        if src:
            return format_html('<img src="{}" style="width:46px;height:46px;object-fit:cover;border-radius:8px;" />', src)
        return '—'
    photo.short_description = ''

    def photo_preview(self, obj):
        src = obj.image.url if obj.image else obj.image_url
        if src:
            return format_html('<img src="{}" style="max-width:180px;border-radius:8px;" />', src)
        return '—'
    photo_preview.short_description = 'Current Image'

    actions = ['make_available', 'make_unavailable']

    def make_available(self, request, queryset):
        queryset.update(is_available=True)
    make_available.short_description = 'Mark selected as Available'

    def make_unavailable(self, request, queryset):
        queryset.update(is_available=False)
    make_unavailable.short_description = 'Hide selected from menu'


admin.site.site_header = 'KBR Restro & Bar'
admin.site.site_title = 'KBR Menu Admin'
admin.site.index_title = 'Menu Management'
