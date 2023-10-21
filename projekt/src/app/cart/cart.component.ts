import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Array<Iproducts> =[];

  constructor(private CS: CartService){}

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    
  }

}
