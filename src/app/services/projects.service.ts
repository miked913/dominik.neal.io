import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../data/projects-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsUrl = 'assets/projects-content.json';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
