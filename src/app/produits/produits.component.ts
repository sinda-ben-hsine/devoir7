import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
  produits: Produit[] = [];  // Assure-toi que 'produits' est initialisé comme un tableau vide
 
  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {this.chargerProduit();}
    // Utilisation correcte de subscribe pour récupérer les produits
    chargerProduit(){
    this.produitService.listeProduit().subscribe(prods => {
      this.produits = prods;
      console.log(this.produits);  // Vérifie que les produits sont chargés
    });
    }
  
    supprimerProduit(p: Produit) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf && p.idProduit !== undefined) {  // Vérifie que l'id n'est pas undefined
        this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
          console.log("produit supprimé");
          this.chargerProduit();
        });
      } else {
        console.error("Le produit n'a pas d'identifiant valide.");
      }
    }
    

}
