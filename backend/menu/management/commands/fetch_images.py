"""
Usage:
  python manage.py fetch_images --key YOUR_PEXELS_API_KEY

Get a free key at https://www.pexels.com/api/ (instant, no credit card)
Fetches images only for products that don't already have one.
Use --force to re-fetch all.
"""
import time
from django.core.management.base import BaseCommand
from menu.models import Product
from menu.image_fetch import fetch_pexels_image
import os


class Command(BaseCommand):
    help = 'Auto-fetch food images from Pexels for all products'

    def add_arguments(self, parser):
        parser.add_argument('--key', type=str, help='Pexels API key')
        parser.add_argument('--force', action='store_true', help='Re-fetch even if image_url exists')

    def handle(self, *args, **options):
        api_key = options.get('key') or os.environ.get('PEXELS_API_KEY', '')
        if not api_key:
            self.stdout.write(self.style.ERROR(
                'No API key provided.\n'
                'Get a free key at https://www.pexels.com/api/\n'
                'Then run: python manage.py fetch_images --key YOUR_KEY'
            ))
            return

        # Inject key into environment so image_fetch.py picks it up
        os.environ['PEXELS_API_KEY'] = api_key

        qs = Product.objects.all()
        if not options['force']:
            qs = qs.filter(image_url='', image='')

        total = qs.count()
        self.stdout.write(f'Fetching images for {total} products...\n')

        ok = fail = 0
        for product in qs:
            url = fetch_pexels_image(product.name)
            if url:
                product.image_url = url
                product.save(update_fields=['image_url'])
                ok += 1
                self.stdout.write(f'  OK  {product.name}')
            else:
                fail += 1
                self.stdout.write(f'  --  {product.name} (no result)')
            time.sleep(0.25)  # stay within Pexels rate limit (200 req/min free)

        self.stdout.write(self.style.SUCCESS(f'\nDone: {ok} fetched, {fail} skipped.'))
