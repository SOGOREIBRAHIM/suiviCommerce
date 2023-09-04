import { Component,inject } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produits';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Panier } from '../models/panier';
import { Commande } from '../models/commande';
import { SuiviCommandesService } from '../services/suivi-commandes.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier-achat',
  templateUrl: './panier-achat.component.html',
  styleUrls: ['./panier-achat.component.css']
})
export class PanierAchatComponent {
  user:Client;
  qty:number = 1;
  prixTotalPanier:number=0;
  qties:any[] = [];
  panierList:Produit[] = [];
  showModal = false;
  addCmdForm:FormGroup | any;
  produitservices: ProduitService = inject(ProduitService);
  userServices: AuthService = inject(AuthService);
  cmdServices: SuiviCommandesService = inject(SuiviCommandesService);
  constructor(userService:AuthService,router:Router){
    this.user = userService.getUser();
    if(this.user.nomComplet == "inc"){
      router.navigate(['/auth']);
      return
    }
    console.log(this.user);
    this.panierList = this.produitservices.getPanier();

    this.addCmdForm = new FormGroup({
      nom:new FormControl(this.user.nomComplet,[Validators.required]),
      contact: new FormControl(this.user.contact,[Validators.required]),
      localisation: new FormControl(this.user.localisation,[Validators.required])
    })
    
  }

  setPanierPrixTotal(prix:number):number{
    this.prixTotalPanier += prix;
    console.log(this.prixTotalPanier);
    return prix;
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
  onSubmitAddCmd(){
    const user = this.userServices.getUser();
      user.contact = this.addCmdForm.value.contact ?? "";
      user.localisation = this.addCmdForm.value.localisation ?? "";
    const panier = new Panier(this.produitservices.panierList,this.qties);
    this.cmdServices.setCommandInList(new Commande(1,user,panier,"30/08/2023",false));
    
  }
}
