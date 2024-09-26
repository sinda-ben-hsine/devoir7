import { Component, OnInit } from '@angular/core';  // OnInit should be imported

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']  // Correct property name
})
export class ProduitsComponent implements OnInit {
  produits: string[];

  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }

  ngOnInit(): void {
    // You can add initialization logic here if needed
  }
}
