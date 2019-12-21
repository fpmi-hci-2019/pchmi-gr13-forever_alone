import { Component, OnInit } from "@angular/core";
import { Product } from "../Entities/Product";
import { DataService } from "../services/data.service";
@Component({
  selector: "basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"]
})
export class BasketComponent implements OnInit {
  basketProducts: Product[] = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    console.log(this.basketProducts);
    this.data.currentMessage.subscribe(message => {
      this.basketProducts = message;
    });
  }
}
