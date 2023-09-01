export class Client {
    
        private id:number;
        public nomComplet:string;
        public email:string;
        public password:string;
        public localisation:string;
        public contact:string;
        private commandes:string | undefined; // a lier a la classe commande
        public userType = 0; // pour les utilisateurs ordinaire
      
        constructor(id:number,nom:string,email:string,contact:string,localisation:string,password:string,userType:number){
          this.id = id;
          this.nomComplet = nom;
          this.email = email;
          this.localisation = localisation;
          this.contact = contact;
          this.password = password;
          this.userType = userType
          //this.commandes = commades;
        }
      }
      
