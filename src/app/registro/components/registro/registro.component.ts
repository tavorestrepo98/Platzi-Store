import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event): void {
    event.preventDefault();
    if (this.form.valid){
      const client = this.form.value;
      this.authService.createUser(client.email, client.password)
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch(() => {
        this.router.navigate(['home']);
      });
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

}
