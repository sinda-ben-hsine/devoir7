import { Component, OnInit } from '@angular/core';  // OnInit should be imported
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']  // Correct property name
})
export class ProduitsComponent implements OnInit {
  
 produits?: Produit[];
 
  constructor( private produitService : ProduitService) {
    //this.produits = [];
    }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits(); // Add parentheses to call the method
    console.log(this.produits);  // Log the products to ensure they are loaded
}
supprimerProduit(prod : Produit){
  //console.log(prod);
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
  this.produitService.supprimerProduit(prod);
}
  }

