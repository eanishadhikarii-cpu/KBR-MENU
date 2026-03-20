from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    subcategory = models.CharField(max_length=100, blank=True, default='')
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.CharField(max_length=100)  # string to support "380 / 760 / 11500" format
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, default='')
    is_veg = models.BooleanField(default=True)
    is_available = models.BooleanField(default=True)
    is_bestseller = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.category.name} › {self.name}"
