import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  items = this.cartItems.asReadonly();
  
  totalItems = computed(() => 
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );
  
  totalPrice = computed(() => 
    this.cartItems().reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  );

  addToCart(product: Product) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      this.cartItems.set(
        currentItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cartItems.set([...currentItems, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number) {
    this.cartItems.set(
      this.cartItems().filter(item => item.product.id !== productId)
    );
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    
    this.cartItems.set(
      this.cartItems().map(item => 
        item.product.id === productId 
          ? { ...item, quantity }
          : item
      )
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
