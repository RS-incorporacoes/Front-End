import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  windowScrolled = false;

  ngOnInit() {
    localStorage.setItem("project", '1');
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset > 200;
    });
  }
  title = 'src';

  scrollToTop(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
