import { Component,inject } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produits';

@Component({
  selector: 'app-panier-achat',
  templateUrl: './panier-achat.component.html',
  styleUrls: ['./panier-achat.component.css']
})
export class PanierAchatComponent {
  qty:number = 1;
  qties:any[] = [];
  panierList:Produit[] = [];
  showModal = false;
  produitservices: ProduitService = inject(ProduitService);
  constructor(){
    this.panierList = this.produitservices.getPanier();
  }

  getQuantity(index:number):number{
    if(this.qties[index] == undefined){
        this.qties[index] = this.qty;
        console.log(this.qties[index]);
        return this.qties[index];
    }
    return this.qties[index];
  }

  increQtyByIndex(index:number):void{
    this.qties[index] += 1;
    this.getQuantity(index);
  }
  decreQtyByIndex(index:number):void{
    if(this.getQuantity(index) == 1){
      return
  }
    this.qties[index] -= 1;
    this.getQuantity(index);   
  }
  removeOnPanier(e:Event,index:number){
    this.panierList.splice(index,1);
    this.produitservices.updatePanierCount(this.produitservices.getPanier().length);
  }
}
