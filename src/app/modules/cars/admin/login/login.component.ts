import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { logUserForm } from '../../form.build';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [HttpClient, HttpClientModule, AuthService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = {} as FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = logUserForm();
  }

  public logUser(): void {
    this.authService.logUser(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.authService.isUserLogged = true;
        console.log('this.authService.isUserLogged',this.authService.isUserLogged)
        this.authService.isLogged.next(true);
      },
      error: (response) => {
        this.authService.isUserLogged = false;
      }
  });

  }

}
