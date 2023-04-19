import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})

export class OurProjectsComponent {
  baseURL = 'http://localhost:3000/projects'
  imagePath = ['../../assets/images/171244.jpg','../../assets/images/171251.jpg','../../assets/images/171271.jpg','../../assets/images/darkforest.jpg','../../assets/images/1535930.jpg','../../assets/images/10838509.jpg']
  centerImg = 1

  async getProject(){
   const res = await axios.get(this.baseURL)
  }

  nextImage(){
    if(!(this.centerImg + 2 > this.imagePath.length - 1)){
      this.centerImg++
    }
  }

  prevImage(){
    if(!(this.centerImg - 2 < 0)){
      this.centerImg--
    }
  }
  

  voltar = '<'
  prox = '>'
}
