"""
Run this to create a limited staff account for restaurant workers.
They can edit prices and toggle availability but cannot delete categories.

Usage:
  python manage.py shell < create_staff.py
"""
from django.contrib.auth.models import User, Permission
from django.contrib.contenttypes.models import ContentType
from menu.models import Product, Category

# ── Create staff user ─────────────────────────────────
username = 'staff'       # ← change this
password = 'kbr@2024'   # ← change this to something strong
email    = ''

if User.objects.filter(username=username).exists():
    print(f'User "{username}" already exists.')
    user = User.objects.get(username=username)
else:
    user = User.objects.create_user(username=username, password=password, email=email)
    print(f'Created user: {username}')

# Staff flag = can log into admin panel
user.is_staff = True
user.is_superuser = False  # NOT a superuser — limited access only
user.save()

# ── Grant only these permissions ──────────────────────
product_ct  = ContentType.objects.get_for_model(Product)
category_ct = ContentType.objects.get_for_model(Category)

allowed = [
    Permission.objects.get(codename='change_product',  content_type=product_ct),
    Permission.objects.get(codename='add_product',     content_type=product_ct),
    Permission.objects.get(codename='view_product',    content_type=product_ct),
    Permission.objects.get(codename='view_category',   content_type=category_ct),
]

user.user_permissions.set(allowed)
print(f'Permissions set. Staff can: view/add/edit products, view categories.')
print(f'\nLogin at: http://127.0.0.1:8000/admin/')
print(f'Username: {username}')
print(f'Password: {password}')
