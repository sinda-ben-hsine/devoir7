import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']  // Corrected: 'styleUrls'
})
export class UpdateProduitComponent {
  currentProduit = new Produit();
  
  constructor(private activatedRoute: ActivatedRoute, private router :Router,private produitService: ProduitService) {
    
  }

  ngOnInit(): void {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe( prod =>{ this.currentProduit = prod; } ) ;
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }
    
}
