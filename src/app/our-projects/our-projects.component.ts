import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})

export class OurProjectsComponent implements OnInit {
  baseURL = 'http://localhost:3000/projects'
  projects: any
  centerImg = 1

  async ngOnInit(){
   const res = await axios.get(this.baseURL)
   this.projects = res.data
  }

  selectProject(id: number){
    localStorage.setItem("project", id.toString())
  }
}
