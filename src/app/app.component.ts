import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bio-webapp';



  onClick(event: any){
    console.log('Button clicked');
  }
}
