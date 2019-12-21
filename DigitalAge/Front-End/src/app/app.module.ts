import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { RegistrationComponent } from "./user/registration/registration.component";
import { LoginComponent } from "./user/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "./services/products.service";
import { BasketComponent } from "./products/basket.component";
import { DataService } from "./services/data.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "user",
    component: UserComponent,
    children: [
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent }
    ]
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "Product/Categories/:category",
    component: ProductsComponent
  },
  {
    path: "Product/Search/:name",
    component: ProductsComponent
  },
  {
    path: "User/Basket",
    component: BasketComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProductsComponent,
    BasketComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProductService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
