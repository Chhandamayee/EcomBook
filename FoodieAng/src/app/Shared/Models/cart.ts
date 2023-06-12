import { CartItem } from "./cartItems";

export class Cart {
    item: CartItem[] = [];

    get totalPrice(): number {
        let totalprice = 0;
        this.item.forEach(item => {
            totalprice += item.price;
        });
        return totalprice;
    }
}