import { BaseService } from './../core/base.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    getAllProduct(): Observable<Product[]> {
        return this.getAll('products?limit=10')
    }
    getByCategories(category:String): Observable<Product[]> {
        return this.getAll(`products/category/${category}`)
    }

}
