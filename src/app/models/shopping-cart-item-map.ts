import { ShoppingCartItem } from "./shopping-cart-item";

export interface ShoppingCartItemMap{
   items: {[product: string]: ShoppingCartItem} ,
}