import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Customer } from '../model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  customer: Customer = {
    name: 'Klaudia',
    age: 29,
    photoUrl: '../assets/customer.png',
    city: 'Poznan',
    categories: ['new', 'outside', 'VIP']
  };
  isCityVisible: boolean = true;

  showCity(): void {
    this.isCityVisible = !this.isCityVisible;
  }

}
