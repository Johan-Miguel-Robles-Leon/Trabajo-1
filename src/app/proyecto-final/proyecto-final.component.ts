import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleService } from '../services/example.service';
import { GoogleMapsModule } from '@angular/google-maps';



@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, GoogleMapsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.css'
})
export class ProyectoFinalComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom : 14
 }
 marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
 }
}
