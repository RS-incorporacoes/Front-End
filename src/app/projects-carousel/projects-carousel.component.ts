import { Component, OnInit, OnChanges } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-projects-carousel',
  templateUrl: './projects-carousel.component.html',
  styleUrls: ['./projects-carousel.component.css']
})
export class ProjectsCarouselComponent implements OnInit{

  id: any
  projects: any
  project = [
    {
      "id": 1,
      "name": "Loteamento Montanha Solene",
      "address": "Povoado Lagoa Redonda - Pirambu",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tellus, porttitor vitae pulvinar vel, sollicitudin nec ante. Aliquam vel elementum est. In tincidunt lacus a tincidunt lacinia. Fusce viverra tellus sapien. Sed eros est, commodo interdum suscipit non, elementum et risus. Quisque rutrum lacinia consequat. Praesent volutpat nibh eu vulputate ultrices. Phasellus feugiat tincidunt est a efficitur. Suspendisse ut justo in dui rhoncus condimentum eget a eros.",
      "shotDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
      "price": "20000",
      "img": "../../assets/images/171244.jpg"
    },
    {
      "id": 2,
      "name": "Loteamento Riacho Doce",
      "address": "Conjunto Augusto Franco - Aracaju",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tellus, porttitor vitae pulvinar vel, sollicitudin nec ante. Aliquam vel elementum est. In tincidunt lacus a tincidunt lacinia. Fusce viverra tellus sapien. Sed eros est, commodo interdum suscipit non, elementum et risus. Quisque rutrum lacinia consequat. Praesent volutpat nibh eu vulputate ultrices. Phasellus feugiat tincidunt est a efficitur. Suspendisse ut justo in dui rhoncus condimentum eget a eros.",
      "shotDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
      "price": "10000",
      "img": "../../assets/images/171251.jpg"
    },
    {
      "id": 3,
      "name": "Loteamento Jardim Florido",
      "address": "Atalaia Nova - Barra dos Coqueiros",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tellus, porttitor vitae pulvinar vel, sollicitudin nec ante. Aliquam vel elementum est. In tincidunt lacus a tincidunt lacinia. Fusce viverra tellus sapien. Sed eros est, commodo interdum suscipit non, elementum et risus. Quisque rutrum lacinia consequat. Praesent volutpat nibh eu vulputate ultrices. Phasellus feugiat tincidunt est a efficitur. Suspendisse ut justo in dui rhoncus condimentum eget a eros.",
      "shotDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
      "price": "15000",
      "img": "../../assets/images/171271.jpg"
    },
    {
      "id": 4,
      "name": "Loteamento Riacho Doce",
      "address": "Povoado Lagoa Redonda - Pirambu",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tellus, porttitor vitae pulvinar vel, sollicitudin nec ante. Aliquam vel elementum est. In tincidunt lacus a tincidunt lacinia. Fusce viverra tellus sapien. Sed eros est, commodo interdum suscipit non, elementum et risus. Quisque rutrum lacinia consequat. Praesent volutpat nibh eu vulputate ultrices. Phasellus feugiat tincidunt est a efficitur. Suspendisse ut justo in dui rhoncus condimentum eget a eros.",
      "shotDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
      "price": "20000",
      "img": "../../assets/images/171244.jpg"
    },
    {
      "id": 5,
      "name": "Loteamento Riacho Doce",
      "address": "Povoado Lagoa Redonda - Pirambu",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tellus, porttitor vitae pulvinar vel, sollicitudin nec ante. Aliquam vel elementum est. In tincidunt lacus a tincidunt lacinia. Fusce viverra tellus sapien. Sed eros est, commodo interdum suscipit non, elementum et risus. Quisque rutrum lacinia consequat. Praesent volutpat nibh eu vulputate ultrices. Phasellus feugiat tincidunt est a efficitur. Suspendisse ut justo in dui rhoncus condimentum eget a eros.",
      "shotDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
      "price": "20000",
      "img": "../../assets/images/171244.jpg"
    }
  ]

  baseURL = 'http://localhost:3000/projects'

  selectProject(id: number){
    this.id = id;
    localStorage.setItem("project", this.id.toString())
  }

  async ngOnInit(){
    const res = await axios.get(this.baseURL)
    this.projects = res.data;
    this.id = localStorage.getItem("project")
  }
}
