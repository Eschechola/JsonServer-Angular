import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  
  product: Product;


  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    var id: string = this.route.snapshot.paramMap.get("id")
    this.productService.ReadById(id).subscribe(product => {
      this.product = product
    });
  }


  //A função de criar produto retorna um observable
  //a .subscribe aguarda uma resposta do back end e executa uma função após
  //logo o padrão observer, sempre fica observando uma resposta, quando a resposta
  //chega ele executa alguma ação
  UpdateProduct(): void{
    this.productService.Update(this.product).subscribe(() => { 
      this.productService.ShowMessage("Produto atualizado com sucesso!");
      this.router.navigate(['/products']);
    })
  }


  Cancel(): void{
    this.router.navigate(['/products']);
  }
}
