export class Client {
    
        private id:number;
        private nomComplet:string;
        private email:string;
        public password:string;
        private commandes:string | undefined; // a lier a la classe commande
      
        constructor(id:number,nom:string,email:string,password:string){
          this.id = id;
          this.nomComplet = nom;
          this.email = email;
          this.password = password;
          //this.commandes = commades;
        }
      }
      
