import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { CartComponent } from './cart/cart.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [{
  path:"", component:ProductsListComponent
},{
  path:"products/:id" , component:ProductDetalisComponent  
},{
  path:"cart" , component:CartComponent
},{
  path:"about", component: AboutPageComponent
},{
  path:"**", redirectTo: "" 
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
