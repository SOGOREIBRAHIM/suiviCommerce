import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IgxOverlayService, IgxToggleDirective } from 'igniteui-angular';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produits';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public produits: any[] = [];

  public slides = [
    {
      src: '../assets/img/Group 32.png'
    },
    {
      src: '../assets/img/1.jpeg'
    },
    {
      src: '../assets/img/2.jpeg'
    },
    {
      src: '../assets/img/3.jpeg'
    },
    {
      src: '../assets/img/4.jpeg'
    }
    
];

constructor(private _dialog: MatDialog, private _produitService: ProduitService){}

ouvrirDetail(data:any){
  this._dialog.open(DetailProduitComponent,{
    data,
  })
}
addToCart(p:Produit){
  console.log(p);
  this._produitService.setPanier(p);

  this._produitService.updatePanierCount(this._produitService.getPanier().length);
  //this.count += 1;
 // this.panierCounter.emit(p);
}
ngOnInit(): void {
  this.produits = this._produitService.getAllProduits();
  console.log(this.produits);
}

}
