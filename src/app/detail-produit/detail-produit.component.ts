import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produit } from '../models/produits';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  product:Produit;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
      this.product = data;
  }
}
