import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  cartService = inject(CartService);
  
  product = signal<Product | undefined>(undefined);
  quantity = signal(1);
  showToast = signal<boolean>(false);
  toastMessage = signal<string>('');
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const product = this.productService.getProductById(+id);
      if (product) {
        this.product.set(product);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
  
  increaseQuantity() {
    this.quantity.update(q => q + 1);
  }
  
  decreaseQuantity() {
    this.quantity.update(q => Math.max(1, q - 1));
  }
  
  addToCart() {
    const product = this.product();
    if (product) {
      const qty = this.quantity();
      for (let i = 0; i < qty; i++) {
        this.cartService.addToCart(product);
      }
      
      // Show toast notification
      this.toastMessage.set(`✅ ${qty} x ${product.name} added to cart!`);
      this.showToast.set(true);
      
      // Reset quantity and hide toast after 3 seconds
      this.quantity.set(1);
      setTimeout(() => {
        this.showToast.set(false);
      }, 3000);
    }
  }
  
  getCartQuantity(): number {
    const product = this.product();
    if (!product) return 0;
    const cartItem = this.cartService.items().find(item => item.product.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  }
}
