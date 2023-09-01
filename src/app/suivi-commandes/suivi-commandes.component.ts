import { Component, OnInit, inject } from '@angular/core';
import { SuiviCommandesService } from '../services/suivi-commandes.service';
import { Commande } from '../models/commande';
import { Panier } from '../models/panier';
import { Produit } from '../models/produits';

@Component({
  selector: 'app-suivi-commandes',
  templateUrl: './suivi-commandes.component.html',
  styleUrls: ['./suivi-commandes.component.css']
})
export class SuiviCommandesComponent implements OnInit{
  commandesList:Commande[] = [];
  panier:Panier | undefined;
  produits:Produit[];
  
  commandesservices: SuiviCommandesService = inject(SuiviCommandesService);

  constructor(){
    this.commandesList = this.commandesservices.getAllCommands();
    
    if(this.commandesList[0]){
      this.panier = this.commandesList[0].panier;
      this.produits = this.panier.produits
    }
    this.produits = []
  }
  ngOnInit(): void {
    this.commandesList = this.commandesservices.getAllCommands();
    if(this.commandesList[0]){
      this.panier = this.commandesList[0].panier;
      this.produits = this.panier.produits;
    }
    console.log(this.commandesList);
  }

  removeOnCommands(e:Event,index:number){
    this.commandesList.splice(index,1);
  }

}
