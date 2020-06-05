import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { Observable, EMPTY } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private snackBar: MatSnackBar,
        private http: HttpClient
    ) { }

    baseUrl : string = "http://localhost:3001/products"


    ShowMessage(message: string, isError: boolean = false): void {
        this.snackBar.open(message, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }

    ErrorHandler(error: any): Observable<any>{
        this.ShowMessage('Ocorreu algum erro!', true);
        return EMPTY;
    }

    //retorna um observable de produto
    //que terá o .subscribe ao finalizar
    Create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, product).pipe(
            map((obj) => obj),
            catchError(e => this.ErrorHandler(e))
        );
    }


    Read(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl).pipe(
            map((obj) => obj),
            catchError(e => this.ErrorHandler(e))
        );
    }


    ReadById(id: string) : Observable<Product>{
        return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
            map((obj) => obj),
            catchError(e => this.ErrorHandler(e))
        );
    }


    Update(product: Product): Observable<Product>{
        //url, body
        return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product).pipe(
            map((obj) => obj),
            catchError(e => this.ErrorHandler(e))
        );
    }


    Delete(id: string): Observable<Product>{
        return this.http.delete<Product>(`${this.baseUrl}/${id}`).pipe(
            map((obj) => obj),
            catchError(e => this.ErrorHandler(e))
        );
    }
}
