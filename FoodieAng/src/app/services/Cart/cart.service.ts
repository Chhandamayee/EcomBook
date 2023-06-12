import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Cart } from 'src/app/Shared/Models/cart';
import { CartItem } from 'src/app/Shared/Models/cartItems';
import { Foods } from 'src/app/Shared/Models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Foods): void {
    let cartItem = this.cart.item.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.item.push(new CartItem(food));
  }
  removeFromCart(foodId: number): void {
    this.cart.item = this.cart.item.filter(item => item.food.id != foodId);
  }
  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.cart.item.find(item => item.food.id === foodId)
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): Cart {
    return this.cart;
  }
}
