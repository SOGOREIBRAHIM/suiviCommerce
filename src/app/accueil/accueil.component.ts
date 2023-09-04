import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IgxOverlayService, IgxToggleDirective } from 'igniteui-angular';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produits';
import { Router } from '@angular/router';
import { Client } from '../models/client';
import { AuthService } from '../services/auth.service';
import { Panier } from '../models/panier';
import { SuiviCommandesService } from '../services/suivi-commandes.service';
import { Commande } from '../models/commande';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public router:Router;
  public produits: any[] = [];
  public user:AuthService;
  private cmdService:SuiviCommandesService;
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

constructor(router:Router,private _dialog: MatDialog,
  private userService:AuthService,
  private _produitService: ProduitService,
  cmdService:SuiviCommandesService){
  this.router = router;
  this.user = userService;
  this.cmdService = cmdService;
}

ouvrirDetail(data:any){
  this._dialog.open(DetailProduitComponent,{
    data,
  })
}
addToCart(p:Produit){

  if(this.userService.getUser().nomComplet == "inc"){
     this.router.navigate(['/auth']);
     return
  }
  this._produitService.setPanier(p);

  this._produitService.updatePanierCount(this._produitService.getPanier().length);
  //this.count += 1;
 // this.panierCounter.emit(p);
}
ngOnInit(): void {
  this.produits = this._produitService.getAllProduits();
  console.log(this.produits);
}

AddCmd(){
  if(this.userService.getUser().nomComplet == "inc"){
    this.router.navigate(['/auth']);
    return
 }
  const user = this.userService.getUser();
    user.contact = user.contact ?? "";
    user.localisation = user.localisation ?? "";
  const panier = new Panier(this._produitService.panierList,[1]);
  this.cmdService.setCommandInList(new Commande(1,user,panier,"30/08/2023",false));
}

}
