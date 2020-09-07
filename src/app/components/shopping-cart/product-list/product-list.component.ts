import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.productList = data.map(e => {
        //return{
          //const data = e.payload.doc.data(); 
          //const id = e.payload.doc.id; 
          //return {id,...(data as object)}
          //id: e.payload.doc.id,
        //  ...e.payload.doc.data()
        //}as Product ;
        
        const data = e.payload.doc.data() as Product;
        const id = e.payload.doc.id;
        return { id, ...data };
        
      })
    });

  //ngOnInit(): void {
  //  this.productList=this.productService.getProducts()
  //}
  }

}
