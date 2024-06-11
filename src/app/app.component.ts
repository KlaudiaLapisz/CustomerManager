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
    isActive: true,
    photoUrl: '../assets/customer.png'
  };

  changeIsActive(): void {
    this.customer.isActive = !this.customer.isActive;
  }

}
