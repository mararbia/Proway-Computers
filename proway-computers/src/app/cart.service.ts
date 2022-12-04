import { ICartProduct } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ICartProduct[] = [];

  constructor() { }

  getCart(){
    return JSON.parse(localStorage.getItem("cart") || "");
  }

  addToCart(product: ICartProduct){
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanCart(){
    this.items = [];
    localStorage.clear();
  }
}
