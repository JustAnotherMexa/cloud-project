import { ShoppingCart } from "./shopping-cart";

export class Order {
    datePlaced: number;
    name: string;
    items: any[];
    paymentId: string;

    constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart, paymentId: string){
        this.datePlaced = new Date().getTime();
        this.paymentId = paymentId;
        this.items = shoppingCart.items.map(i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          })
    }
}