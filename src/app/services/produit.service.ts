import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Configurer les options HTTP
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8090/produits/api';
  produits: Produit[] = [];  // Initialise le tableau vide

  constructor(private http: HttpClient) {}  // Ajout du HttpClient au constructeur

  // Méthode pour obtenir un produit en fonction de son id
  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);  // Utilisation de HttpClient pour la requête GET
  }

  // Méthode pour récupérer la liste des produits
  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);  // Utilisation de HttpClient pour la requête GET
  }

  // Méthode pour ajouter un produit
  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);  // Utilisation de HttpClient pour la requête POST
  }

  // Méthode pour supprimer un produit en fonction de son id
  supprimerProduit(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);  // Utilisation de HttpClient pour la requête DELETE
  }

  // Méthode pour mettre à jour un produit
  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiURL, prod, httpOptions);  // Utilisation de HttpClient pour la requête PUT
  }

  // Méthode pour trier les produits par id
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }
}
