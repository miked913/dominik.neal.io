import { Component } from '@angular/core';

@Component({
  selector: 'get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  mailMe() {
    window.open('mailto:dominik.neal20@gmail.com', "_blank");

  }
}
