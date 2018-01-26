import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";
import { ShoppingCartItemMap } from "./shopping-cart-item-map";

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap:  {[product: string] : ShoppingCartItem}) {
        this.itemsMap = itemsMap || {};
        for (let product in itemsMap) {
            let item = itemsMap[product];
            this.items.push(new ShoppingCartItem({...item, key: product}));
        }
        
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.key]
        return item ? item.quantity : 0;
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity
        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }
}