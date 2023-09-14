import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  ngOnInit(): void {

    setTimeout(() => {
      this.startTypewriterEffect();
    }, 500); // Delay in milliseconds

    
  }

  startTypewriterEffect() {
    
  }

}
