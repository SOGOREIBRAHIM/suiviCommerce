import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      designation: 'ordinateur',
      prix: 'ordinateur',
      quantite: '2',
      categorie: 'Electronique',
      date: '2023-08-23',
      description: 'ordinateur très bon',
      photo: new FormControl(""),
      photoName: ""
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
   
        //   reader.result as string;
     
         this.empForm.patchValue({
          photoName: file.name// reader.result?.toString()
         });
   
      };
    }
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
