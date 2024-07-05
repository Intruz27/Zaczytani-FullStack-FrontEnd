import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  providers: [AuthService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit{
  public isUserLogged: boolean = false;

  constructor(public authService: AuthService){}

  public ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
  }

  public logout(): void {
    this.authService.isUserLogged = false;
  }


}
