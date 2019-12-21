import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../Entities/Product";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<Product[]>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: Product[]) {
    this.messageSource.next(message);
  }
}
