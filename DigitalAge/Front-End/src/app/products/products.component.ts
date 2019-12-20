import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products.service";
import { Product } from "../Entities/Product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "prods",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      console.log(p);
      if (p["name"] !== undefined) {
        this.getSearchProducts(p["name"]);
      } else if (p["category"] !== undefined) {
        this.getCategoryProducts(p["category"]);
      }
    });
  }

  getCategoryProducts(category: string) {
    this.prodService
      .getCategoryProducts(category)
      .subscribe(h => (this.products = h));
  }

  getSearchProducts(search: string) {
    this.prodService
      .getSearchProducts(search)
      .subscribe(h => (this.products = h));
  }
}
