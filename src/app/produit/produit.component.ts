import { Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AjoutProduitComponent } from '../ajout-produit/ajout-produit.component';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  title = 'suiviCommande';
  displayedColumnsCmd: string[] = ['id','client', 'categorie', 'designation', 'prix', 'quantite', 'status','date', 'description','action','photo'];
  displayedColumns: string[] = ['id', 'designation', 'prix', 'quantite', 'categorie', 'date', 'description','action','photo'];
  dataSource = new MatTableDataSource<any>

@ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(private _dialog: MatDialog, private _empService: ProduitService){}

ouvrirAjouter(){
  const dialoRef = this._dialog.open(AjoutProduitComponent)
  dialoRef.afterClosed().subscribe({
    next: (val) => {
      if(val){
        this.lireProduitList();
      }
    }
  })
}

ouvrirModifier(data: any){
  console.log(data);
  const dialoRef = this._dialog.open(AjoutProduitComponent,{
    data,
  });
  
  dialoRef.afterClosed().subscribe({
    next: (val) => {
      if(val){
        this.lireProduitList();
      }
    }
  })
}

ngOnInit(): void {
  
  this.lireProduitList();
}

lireProduitList(){
console.log(this.dataSource);
 this.dataSource.data =  this._empService.getAllProduits();

return
  this._empService.lireProduit().subscribe({
    next: (res) => {
      this.dataSource = new MatTableDataSource(res) 
    },
    error: (err) => {
      
    },
  })
}

supprimerProduit(id: number){
  this.dataSource.data.splice(id-1,1);
  this.dataSource._updateChangeSubscription();
  console.log(this.dataSource.data,id);
  return;
  this._empService.supprimer(id).subscribe({
    next: (res) => {
      alert('Produit supprimer !')
      this.lireProduitList();
    },
      error: console.log,
  });
}
}
