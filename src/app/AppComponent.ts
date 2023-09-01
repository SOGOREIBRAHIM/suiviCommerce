import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProduitService } from './services/produit.service';
import { AuthService } from './services/auth.service';
import { Client } from './models/client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  produitService: ProduitService;
  public panierCounter: number = 0;
  userService: AuthService;
  user: Client;
  userName:string;
  constructor(produitService: ProduitService, userService: AuthService) {
    this.produitService = produitService;
    this.userService = userService;
   this.user =  this.userService.getUser();
    this.userName = this.userService.getUserName();
   console.log(this.user);

  }
  ngOnInit(): void {
  
    this.userService.user$.subscribe(nUser =>{
      this.user = nUser;
      this.userService.user = nUser;
    })
    this.userService.username$.subscribe(nU => {
      this.userName = nU;
    });
    this.produitService.panierCount$.subscribe(newCount => {
      this.panierCounter = newCount;
    });
  }

  ngOnChanges(changes: SimpleChanges){
      console.log(this.user);
  }
}
