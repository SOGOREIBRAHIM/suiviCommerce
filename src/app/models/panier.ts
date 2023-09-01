import { Produit } from "./produits";

export class Panier {
   // public id:number;
    public produits:Produit[];
    public quantites: number[];
    constructor(produits:Produit[],quantites:number[]){
      //this.id = id;
      this.produits = produits;
      this.quantites = quantites;
    }
      
}
