import { ICartProduct } from './../products';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ICartProduct[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.totalCalculation();
  }

  totalCalculation(){
    this.total = this.cartItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
  }

  removeCartProduct(productId: number){
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.removeCartProduct(productId);
    this.totalCalculation();
  }

  buy(){
    alert("Parabéns, você finalizou sua compra!!!");
    this.cartService.cleanCart();
    this.router.navigate(["products"])
  }
}
