import { Client } from "./client";
import { Panier } from "./panier";
import { Produit } from "./produits";

export class Commande {
    public id:number;
    public panier:Panier;
    public dateCommande:string;
    public etat:boolean;
    public client: Client;
    constructor(id:number,client:Client,panier:Panier,dateCommande:string,etat:boolean){
      this.id = id;
      this.client = client
      this.panier = panier;
      this.dateCommande = dateCommande;
      this.etat = etat;
    }
}
