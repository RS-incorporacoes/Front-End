import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})

export class MoreInfoComponent implements OnInit, DoCheck {

  id: any
  projects: any
  baseURL = "http://localhost:3000/projects"

  async ngOnInit(){
    const res = await axios.get(this.baseURL)
    this.projects = res.data;
    this.id = localStorage.getItem("project")
  }

  ngDoCheck(){
    this.id = localStorage.getItem("project")
  }

  formatString(str: string){
    if(parseInt(str) > 1000)
      return parseInt(str)/1000 + ".000"
    else
      return parseInt(str)
  }
}
