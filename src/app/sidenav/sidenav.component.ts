import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  // @ViewChild('sidenav') public sidenav: MatSidenav;

  // public toggle(): void {
  //   this.sidenav.toggle();
  // }


  openResume(event: any) {
    // /dominik.neal.io/assets/DominikNealResume.pdf
    // https://miked913.github.io/dominik.neal.io/assets/DominikNealResume.pdf
    event.stopPropagation();
    event.preventDefault();
    window.open('https://miked913.github.io/dominik.neal.io/assets/DominikNealResume.pdf', "_blank");
  }

}
