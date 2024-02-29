import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.css'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string =''
  title = 'Bienvenidos';
  card ={
    title : 'Bienvenidos',
    descripcion : 'Viernes de la jungla',
  }
}
