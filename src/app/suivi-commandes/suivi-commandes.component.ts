import { Component, inject } from '@angular/core';
import { SuiviCommandesService } from '../services/suivi-commandes.service';
import { Commande } from '../models/commande';

@Component({
  selector: 'app-suivi-commandes',
  templateUrl: './suivi-commandes.component.html',
  styleUrls: ['./suivi-commandes.component.css']
})
export class SuiviCommandesComponent {
  commandesList:Commande[] = [];
  commandesservices: SuiviCommandesService = inject(SuiviCommandesService);

  constructor(){
    this.commandesList = this.commandesservices.getAllCommands();
  }

  removeOnCommands(e:Event,index:number){
    this.commandesList.splice(index,1);
  }

}
