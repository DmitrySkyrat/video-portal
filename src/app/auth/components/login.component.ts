import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      login: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAsTouched();
    this.authService.login(this.form.value).subscribe(token => console.log(token))
  }
}
