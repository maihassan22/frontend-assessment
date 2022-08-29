import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss']
})
export class MainProductComponent implements OnInit {

  allProduct?:Product[];
  proudectByCategory?:Product[];
  constructor(private productService:ProductService) { 

  }

  ngOnInit(): void {
    this.getAllProudect();

  }

  getAllProudect(){
    this.productService.getAllProduct().subscribe((res:any)=>{
      this.allProduct=res;
    });
  }

  getByCategories(category:String){
    this.productService.getByCategories(category).subscribe((res:any)=>{
      this.proudectByCategory=res;
    });
  }

}
