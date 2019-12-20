import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @Output() valueSubmitted = new EventEmitter<string>();
  title = "Front-End";
  search: string = "";

  constructor(private router: Router) {}

  onSubmit() {
    this.valueSubmitted.emit(this.search);
    console.log(this.search);
    this.router.navigate([`Product/Search/${this.search}`]);
  }
}
