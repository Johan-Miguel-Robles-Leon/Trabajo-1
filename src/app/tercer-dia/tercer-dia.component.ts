import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.css'
})
export class TercerDiaComponent {
  name ='';
  users: any =[]
  constructor(public example: ExampleService){
  }
  ngOnInit() {
  this.example.obtenerLista().subscribe(resp =>{
    console.log(resp);
    this.users = resp;
    })
  }
}
