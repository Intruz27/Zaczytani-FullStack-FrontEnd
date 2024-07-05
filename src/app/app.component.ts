import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from "./core/core.module";

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [HttpClient],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HttpClientModule, RouterModule, CoreModule]
})
export class AppComponent {
}
