import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../Entities/Product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  readonly baseUrl = "https://localhost:5001";

  constructor(private http: HttpClient) {}

  getCategoryProducts(category: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      this.baseUrl + `/Product/Categories/${category}`
    );
  }

  getSearchProducts(search: string): Observable<Array<Product>> {
    console.log(this.baseUrl + `/Product/Search/${search}`);
    return this.http.get<Array<Product>>(
      this.baseUrl + `/Product/Search/${search}`
    );
  }
}
