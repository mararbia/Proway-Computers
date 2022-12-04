import { CartService } from './../../cart.service';
import { NotificationService } from './../../notification.service';
import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';
import { ICartProduct, IProduct } from 'src/app/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {

  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product =  this.productsService.getOne(productId);
  }

  addToCart(){
    this.notificationService.notify("O produto foi adicionado ao carrinho");
    const product: ICartProduct = {
      ...this.product!,
      quantity: this.quantity
    }
    this.cartService.addToCart(product);
  }
}
