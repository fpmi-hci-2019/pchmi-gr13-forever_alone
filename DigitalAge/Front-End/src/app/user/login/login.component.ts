import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router,  private formBuilder: FormBuilder) { }
  formModel = {
    Email: '',
    Password: '',
  };
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form: NgForm) {
    this.service.login(this.formModel)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
          if (error.status === 400) {
            //this.toastr.error('Incorrect username or password', 'Authentication failed');
          } else {
            console.log(error + error.status);
          }});


    /*      tap(_ => console.log(_))).subscribe(
          (res: any) => {
            localStorage.setItem('token', res);
            this.router.navigateByUrl('/home');
          },
          error => {
            if (error.status === 400) {
              this.toastr.error('Incorrect username or password', 'Authentication failed');
            } else {
              console.log(error + error.status);
            }
          }*/
  }
}
