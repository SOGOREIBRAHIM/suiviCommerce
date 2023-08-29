export class Produit {
    id:number;
    nom:string;
    description:string;
    prix:number;
    qty:number;
    categorie:string;
    imgName:string;
  
    constructor(id:number,nom:string,description:string,qty:number,prix:number,categorie:string,imgName:string){
      this.id = id;
      this.nom = nom;
      this.description = description;
      this.prix = prix;
      this.qty = qty;
      this.categorie = categorie;
      this.imgName = imgName;
    }
}
