from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


@api_view(['GET'])
def categories(request):
    qs = Category.objects.prefetch_related('products')
    serializer = CategorySerializer(qs, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def products(request):
    qs = Product.objects.select_related('category').filter(is_available=True)
    category_id = request.query_params.get('category')
    if category_id:
        qs = qs.filter(category_id=category_id)
    serializer = ProductSerializer(qs, many=True, context={'request': request})
    return Response(serializer.data)
