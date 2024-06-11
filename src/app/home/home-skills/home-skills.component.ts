import { Component } from '@angular/core';
import { animation, trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'home-skills',
  templateUrl: './home-skills.component.html',
  styleUrl: './home-skills.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0, transform: 'translateY(-100px)' }),
            stagger('1000ms',
              animate('1500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        )
      ])
    ])
  ]
  // animations: [
  //   trigger('listAnimation', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateY(-100px)' }),
  //       animate('1500ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))
  //     ])
  //   ])
  // ]
})
export class HomeSkillsComponent {

  skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']; // replace with your actual skills
  // showSkill = [false, false, false, false]; // replace with the number of your actual skills

}
