import { Client } from "./client";
import { Produit } from "./produits";

export class Commande {
    public id:number;
    public produits:Produit;
    public dateCommande:string;
    public etat:boolean;
    public client: Client;
    constructor(id:number,client:Client,produits:Produit,dateCommande:string,etat:boolean){
      this.id = id;
      this.client = client
      this.produits = produits;
      this.dateCommande = dateCommande;
      this.etat = etat;
    }
}
