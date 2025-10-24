import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Category } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);
  
  selectedCategory = signal<string>('all');
  showToast = signal<boolean>(false);
  toastMessage = signal<string>('');
  
  categories: { value: string; label: string; icon: string }[] = [
    { value: 'all', label: 'All Posters', icon: '🎨' },
    { value: 'anime', label: 'Anime', icon: '⚡' },
    { value: 'sports', label: 'Sports', icon: '⚽' },
    { value: 'nature', label: 'Nature', icon: '🌲' },
    { value: 'movies', label: 'Movies', icon: '🎬' }
    
  ];
  
  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    return this.productService.getProductsByCategory(category);
  });
  
  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }
  
  addToCart(event: Event, productId: number) {
    event.preventDefault();
    event.stopPropagation();
    const product = this.productService.getProductById(productId);
    if (product) {
      this.cartService.addToCart(product);
      
      // Show toast notification
      this.toastMessage.set(`✅ ${product.name} added to cart!`);
      this.showToast.set(true);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        this.showToast.set(false);
      }, 3000);
    }
  }
  
  getCategoryLabel(): string {
    if (this.selectedCategory() === 'all') {
      return 'All Posters';
    }
    const category = this.categories.find(c => c.value === this.selectedCategory());
    return category?.label || 'All Posters';
  }
  
  getCartQuantity(productId: number): number {
    const cartItem = this.cartService.items().find(item => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  }
}
