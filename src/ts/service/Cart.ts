import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    priceWithoutDiscount(): number {
        return this._items.reduce((total, item) => total + item.price, 0)
    }
    priceWithtDiscount(discount: number):number {
        return this._items.reduce((total, item) => total + item.price - (item.price * discount / 100), 0)
    }
    deleteItem(itemId: number): void {
      if(this._items.findIndex((item: { id: number; }) => item.id === itemId) === -1) {
        throw new Error(`Товара с id:${itemId} в корзине нет`)
      }
      this._items.splice(this._items.findIndex((item: { id: number; }) => item.id === itemId), 1)
    }

}