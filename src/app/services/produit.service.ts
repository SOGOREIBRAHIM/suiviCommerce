import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _http: HttpClient) { }

  ajouterProduit(date: any): Observable<any>{
    return this._http.post('http://localhost:3000/produit', date);
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
