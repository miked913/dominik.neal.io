import { Component, Input, input } from '@angular/core';
import { animation, trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../data/projects-interface';
import { Router } from '@angular/router';


@Component({
  selector: 'home-projects',
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss',
  animations: [
    trigger('projectAnimation', [
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
})
export class HomeProjectsComponent {


  projects: Project[] = [{
    id: "1",
    header: "Complete The Look",
    subheader: "Ralph Lauren Corp | Cart and Wardrobe Recommendation Experience",
    image: ["/dominik.neal.io/assets/project1/p1_1.png","/dominik.neal.io/assets/project1/p1_2.png", "/dominik.neal.io/assets/project1/p1_3.png"],
    skills: ["Roadmapping", "JIRA", "Discovery"],
    kpis: ["Average Order Value (AOV)", "Conversion Rate", "Bounce Rate", "Session Metric"],
    overview: "Ralph Lauren in a global luxury retail brand that caters to customers who love vintage-style clothing and timeless fashion. The company offers consumers an assortment of experiences for them to make sound decisions on their purchases whether it’s for a formal event or casual wear. ",
    software: ["Web/Mobile Development", "Monetate", "Salesforce Commerce Cloud (SFCC)", "Adobe Analytics", "CDP"],
    strategy: "An element that sets Ralph Lauren a part from its’ competitors is their ability to personalize recommendations based on consumer’s profiles, their history, and what they’ve clicked. Using this and more research, we created an experience that helps consumers complete their look by recommending items that fit the item they want to purchase. This recommendation was used to give the consumer options to prepare an outfit for their upcoming occasion. ",
    learning: "Before launching, we ran this experience as an AB test on a 50/50 split for a specific timeframe. We were able to understand where consumers were clicking, where they were expecting an action to happen, and how it affected the consumer’s purchase behaviour. This test was launched in North America and generated $30 Million+ in annualized revenue."
    },
    {
      id: "2",
      header: "Holidays Shopping Quiz",
      subheader: "Ralph Lauren Corp | Home Page Placement",
      image: ["/dominik.neal.io/assets/project2/p2_1.png","/dominik.neal.io/assets/project2/p2_2.png", "/dominik.neal.io/assets/project2/p2_3.png", "/dominik.neal.io/assets/project2/p2_4.png"],
      skills: ["Roadmapping", "JIRA", "Discovery", "Wire-framing", "Global Stakeholder Alignment"],
      kpis: ["Average Order Value (AOV)", "Conversion Rate", "Bounce Rate", "Session Metric"],
      overview: "Ralph Lauren in a global luxury retail brand that caters to customers who love vintage-style clothing and timeless fashion. The company offers consumers an assortment of experiences for them to make sound decisions on their purchases whether it’s for a formal event or casual wear.",
      software: ["Web/Mobile Development", "Monetate", "Salesforce Commerce Cloud (SFCC)", "Adobe Analytics", "CDP"],
      strategy: "Q4 is the busiest times of the year for Retail companies such as Ralph Lauren. We wanted to capitalize on that to close out the fiscal year. We created a seasonal experience for consumers who are looking to purchase items for themselves and/or others. Consumers are asked a series of questions from who is this item for, how big of a gesture would you like to make, and more. Based on those answers, they were shown a list of products that met those needs.",
      learning: "This was a global experience launched in NA, EMEA, and APAC so it was necessary to have all of the global stakeholders aligned. APAC’s consumers were an interesting use case. With the region being a large as it is, it overlaps the equator. We were able to provide the same cold climate products on the PLP for northern APAC but for Australia specifically, we had to manipulate Data Lake and SFCC to feed spring and summer climate products to the PLP for consumers in that country. This experience ran from October to early January and generated $1.5 million in revenue in all regions combined."
    }]; // replace with your actual projects

  @Input() showTitle = true;
  @Input() showViewAll = true;

  constructor(
    private projectsService: ProjectsService,
    private router: Router

  ) { }

  ngOnInit() {

    this.projectsService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  navigateToProject(id: string) {
    console.log('Navigate to project with id: ', id);
    // this.router.navigate(['/projects/', id]);
  }

}
