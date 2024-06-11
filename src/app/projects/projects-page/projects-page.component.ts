import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../data/projects-interface';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  @Input() header?: string;
  @Input() subheader?: string;
  @Input() image?: string;
  @Input() video?: string;
  @Input() skills?: string[];
  @Input() kpis?: string[];
  @Input() overview?: string;
  @Input() software?: string[];
  @Input() strategy?: string;
  @Input() learning?: string;

  project!: any;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    const rid = this.route.snapshot.paramMap.get('id');
    const id = ''+rid;
    if (id !== null) {
      this.projectsService.getProjects().subscribe(projects => {
        this.project = projects.find(project => project.id === id);
      });
    }
  }
}
