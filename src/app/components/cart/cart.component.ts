import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);
  
  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }
  
  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }
  
  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
    }
  }
  
  checkout() {
    const totalItems = this.cartService.totalItems();
    const totalPrice = this.cartService.totalPrice();
    const shippingCost = totalPrice >= 999 ? 0 : 50;
    const finalTotal = totalPrice + shippingCost;
    
    const confirmMessage = `
🛒 Order Summary:
━━━━━━━━━━━━━━━━━━━━
Items: ${totalItems}
Subtotal: ₹${totalPrice}
Shipping: ${shippingCost === 0 ? 'FREE' : '₹' + shippingCost}
━━━━━━━━━━━━━━━━━━━━
Total: ₹${finalTotal}

Do you want to proceed to checkout?
    `.trim();
    
    if (confirm(confirmMessage)) {
      alert('✅ Order confirmed! Thank you for your purchase.\n\nYour order will be processed shortly.');
      this.cartService.clearCart();
    }
  }
}
