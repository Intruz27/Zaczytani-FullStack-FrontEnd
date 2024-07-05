import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homepage',
  providers: [AuthService],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent{

}
