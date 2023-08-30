import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class SuiviCommandesService {
  listCommand:Commande[] = [];
  constructor() {
    //(id:number,client:Client,produits:Produit,dateCommande:string,etat:boolean)
    // this.listCommand.push(new Commande(1,"azerty","13/08/2023",false));
    // this.listCommand.push(new Commande(2,"azerty","13/08/2023",false));
    // this.listCommand.push(new Commande(3,"azerty","13/08/2023",true));
    // this.listCommand.push(new Commande(4,"iphone8","13/08/2023",false));
    // this.listCommand.push(new Commande(5,"azerty","13/08/2023",true));
    // this.listCommand.push(new Commande(6,"Dell Inspiron","13/08/2023",false));
    // this.listCommand.push(new Commande(7,"azerty","13/08/2023",true));
   }
  getAllCommands():Commande[]{
    return this.listCommand;
  }
  setCommandInList(cmd:Commande):void{
    this.listCommand.push(cmd);
  }

}
