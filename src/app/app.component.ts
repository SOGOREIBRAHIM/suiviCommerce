import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProduitComponent } from './produit/produit.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ProduitService } from './services/produit.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  produitService:ProduitService;
  public panierCounter:number = 0;
  constructor(produitService:ProduitService){
    this.produitService = produitService;
  }
  ngOnInit(): void {
    this.produitService.panierCount$.subscribe(newCount => {
      this.panierCounter = newCount;
    });
  }


}