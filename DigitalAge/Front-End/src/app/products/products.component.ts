import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products.service";
import { Product } from "../Entities/Product";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "prods",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  addedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductService,
    private data: DataService
  ) {
    var prev = JSON.parse(localStorage.getItem("addedProducts"));
    if (prev != null) {
      this.addedProducts = prev;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p["name"] !== undefined) {
        this.getSearchProducts(p["name"]);
      } else if (p["category"] !== undefined) {
        this.getCategoryProducts(p["category"]);
      }
    });
    this.data.currentMessage.subscribe(message => {});
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

  onAdd(product: Product) {
    console.log(this.addedProducts);
    this.addedProducts.push(product);
    localStorage.setItem("addedProducts", JSON.stringify(this.addedProducts));
    this.data.changeMessage(this.addedProducts);
  }
}
