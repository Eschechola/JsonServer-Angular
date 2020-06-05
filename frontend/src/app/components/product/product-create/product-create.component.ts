import { Component, OnInit } from '@angular/core';

import { ProductService } from './../service/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  
  //BINDINGS
  // atributte: string = "Anyone"
  
  // doSomething(): void{
  //   alert('Doing Something');
  // }
    
    constructor(
      private productService: ProductService,
      private router: Router
    ) { }
  

    ngOnInit(): void {
      
    }

    product: Product = {
      name: '',
      price:  0
    }


    //A função de criar produto retorna um observable
    //a .subscribe aguarda uma resposta do back end e executa uma função após
    //logo o padrão observer, sempre fica observando uma resposta, quando a resposta
    //chega ele executa alguma ação
    CreateProduct(): void{
      this.productService.Create(this.product).subscribe(() => { 
        this.productService.ShowMessage("Produto criado com sucesso!");
        this.router.navigate(['/products']);
      })
    }

    Cancel(): void{
      this.router.navigate(['/products']);
    }
}
