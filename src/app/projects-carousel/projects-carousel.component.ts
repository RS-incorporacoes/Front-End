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
