from rest_framework import serializers
from .models import Category, Product


class ProductSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'subcategory',
            'image_url', 'is_veg', 'is_available', 'is_bestseller',
            'category', 'category_name',
        ]

    def get_image_url(self, obj):
        # Uploaded image takes priority
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        # Fall back to auto-fetched URL
        return obj.image_url or None


class CategorySerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'products']

    def get_products(self, obj):
        request = self.context.get('request')
        qs = obj.products.filter(is_available=True)
        return ProductSerializer(qs, many=True, context={'request': request}).data
