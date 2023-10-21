import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Iproducts } from '../iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent implements OnInit{
product: Iproducts ={} as Iproducts;
id : number = 0;

constructor(private route: ActivatedRoute,private CS:CartService){}

addToCart(){
  alert("item has been added to the cart");
  this.CS.addToCart(this.product);

}

ngOnInit(): void{
  this.route.params.subscribe((param: Params) => {
    this.id = param["id"];
    this.product= products[this.id]
   })
  }
}

