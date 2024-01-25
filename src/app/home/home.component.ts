import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HomeDisplayComponent } from '../components/home/home-display/home-display.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeDisplayComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
