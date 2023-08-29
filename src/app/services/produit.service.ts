import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  productList: Produit[] =[];
  constructor(private _http: HttpClient) { }

  ajouterProduit(produit: any): Observable<any>{
    //console.log(produit);
    this.productList.push(new Produit(this.productList.length,produit.designation,produit.description,produit.quantite,produit.prix,
        produit.categorie,produit.imgName));
    //produit.
   // localStorage.setItem("produits",produit);

    return this._http.post('http://localhost:3000/produit', produit);
  }

  modifierProduit(id: number, date: any): Observable<any>{
    return this._http.put(`http://localhost:3000/produit/${id}`, date);
  }

  lireProduit(): Observable<any>{
    return this._http.get('http://localhost:3000/produit');
  }

  supprimer(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/produit/${id}`);
  }

}
