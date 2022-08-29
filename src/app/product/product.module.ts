import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MainProductComponent } from './main-product/main-product.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    MainProductComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
