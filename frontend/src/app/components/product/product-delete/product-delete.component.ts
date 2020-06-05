import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id: string;
  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.productService.ReadById(this.id).subscribe(product => {
      this.product = product
    });
  }


  //A função de criar produto retorna um observable
  //a .subscribe aguarda uma resposta do back end e executa uma função após
  //logo o padrão observer, sempre fica observando uma resposta, quando a resposta
  //chega ele executa alguma ação
  DeleteProduct(): void{
    this.productService.Delete(this.id).subscribe(() => { 
      this.productService.ShowMessage("Produto deletado com sucesso!");
      this.router.navigate(['/products']);
    })
  }



  Cancel(): void{
    this.router.navigate(['/products']);
  }
}
