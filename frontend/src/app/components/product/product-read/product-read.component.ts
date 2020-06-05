import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns : string[] = ['id', 'name', 'price', 'action'] 

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.Read().subscribe(products =>{
      this.products = products;
    })
  }

}
