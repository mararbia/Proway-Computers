import { ICartProduct } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ICartProduct[] = [];

  constructor() { }

  getCart(){
    this.items =  JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  }

  addToCart(product: ICartProduct){
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  removeCartProduct(productId: number){
    this.items = this.items.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanCart(){
    this.items = [];
    localStorage.clear();
  }
}
