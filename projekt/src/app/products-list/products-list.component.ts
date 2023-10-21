import { Component } from '@angular/core';
import { Iproducts } from '../iproducts';
import { products } from '../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: Array<Iproducts>= products;

}
