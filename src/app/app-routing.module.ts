import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [

  {
    path: '', 
    component: AccueilComponent
  },

  {
    path: 'produit', 
    component: ProduitComponent
  },

  {
    path: 'accueil', 
    component: AccueilComponent
  },

  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
