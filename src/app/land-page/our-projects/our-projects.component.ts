import { Component } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})

export class OurProjectsComponent {
  projects = [
    {
      "id": 1,
      "name": "Loteamento Montanha Solene",
      "address": "Povoado Lagoa Redonda - Pirambu",
      "img": "../../assets/images/171244.jpg"
    },
    {
      "id": 2,
      "name": "Loteamento Riacho Doce",
      "address": "Conjunto Augusto Franco - Aracaju",
      "img": "../../assets/images/171251.jpg"
    },
    {
      "id": 3,
      "name": "Loteamento Jardim Florido",
      "address": "Atalaia Nova - Barra dos Coqueiros",
      "img": "../../assets/images/171271.jpg"
    }
  ]
  centerImg = 1
}
