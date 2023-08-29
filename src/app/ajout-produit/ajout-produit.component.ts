import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit{

  empForm: FormGroup;

  // methode pour la liste des categories
  categorie: string[] = [
    'Homme',
    'Femme',
    'Enfant',
    'Informatique',
    'Maison',
    'Bureau',
    'Sante',
    'Electronique',
  ]

  constructor(private _fb: FormBuilder, 
    private _empService: ProduitService,
     private _dialogRef: MatDialogRef<AjoutProduitComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.empForm = this._fb.group({
      designation: '',
      prix: '',
      quantite: '',
      categorie: '',
      date: '',
      description: '',
      photo: ''
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  
  onFormSubmit(){
    if(this.empForm.valid){
      if (this.data) {
        this._empService
          .modifierProduit(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
            alert('Produit modifier !')
            this._dialogRef.close(true);
          },
          error: (err) =>{
            console.error(err);
          },
        });
      } else {
       
        this._empService.ajouterProduit(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Produit ajouter !')
            this._dialogRef.close(true);
            this._empService.lireProduit();
          },
          error: (err) =>{
            console.error(err);
          },
        });

      }
    }
  }



}
