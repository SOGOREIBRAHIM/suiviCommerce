import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  productList: Produit[] =[];
  constructor(private _http: HttpClient) {

    this.productList = this.getAllProduits();
   }

  ajouterProduit(produit: any):boolean{
//(id:number,nom:string,description:string,qty:number,prix:number,categorie:string,imgName:string)
  console.log(produit);    
this.productList.push(new Produit(this.productList.length+1,produit.designation,
      produit.description,produit.quantite,produit.prix,
        produit.categorie,produit.photoName));
 console.log(this.productList);
    //convertir et persister l'objet produit
    localStorage.setItem("produits",JSON.stringify(this.productList));
     console.log(localStorage.getItem("produits"));
     return true;
  }

  modifierProduit(id: number, produit: any){
  
    this.productList =  JSON.parse(localStorage.getItem("produits") ?? "");
    this.productList[id] = produit;

    localStorage.setItem("produits",JSON.stringify(this.productList));
  }

  getAllProduits():any{
    if(localStorage.getItem("produits") == null){
      return;
    }
    return JSON.parse(localStorage.getItem("produits") ?? "");
  }
  getProduitById(id:number):Produit | undefined{
    return this.productList.find(product => product.id === id)
  }
  lireProduit(): Observable<any>{
    return this._http.get('http://localhost:3000/produit');
  }

  supprimer(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/produit/${id}`);
  }

}
