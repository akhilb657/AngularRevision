import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  allProducts: Product[] = [
    {id: 1, name: "Potato", price: 3.9},
    {id: 2, name: "Chicken", price: 13.9},
    {id: 3, name: "Curd", price: 7.9}
  ]
  
}
