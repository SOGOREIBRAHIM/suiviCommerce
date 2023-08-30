import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { IgxCardModule, IgxCarouselModule, IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxOverlayService, IgxRippleModule, IgxToggleModule } from 'igniteui-angular';



import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { PanierAchatComponent } from './panier-achat/panier-achat.component';
import { AuthComponent } from './auth/auth.component';



//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    AjoutProduitComponent,
    PanierAchatComponent,
    AuthComponent,
    ProduitComponent,
    AccueilComponent,
    NotFoundComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    IgxCardModule,
    IgxIconModule,
    IgxRippleModule,
    IgxCarouselModule,
    MatPaginatorModule,
    IgxToggleModule,
    IgxCardModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
