import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


// My Components Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSkillsComponent } from './home/home-skills/home-skills.component';
import { HomeProjectsComponent } from './home/home-projects/home-projects.component';
import { GetInTouchComponent } from './home/get-in-touch/get-in-touch.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';


// Material Modules Imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { MatCarouselModule } from '@ngbmodule/material-carousel';
// import { MatCarouselSlideComponent } from '@ngbmodule/material-carousel';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    HomeSkillsComponent,
    HomeProjectsComponent,
    GetInTouchComponent,
    ProjectsPageComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // NgxExtendedPdfViewerModule,
    // Material Modules Imports
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatGridListModule,
    FontAwesomeModule,
    ImageSliderComponent
    // MatCarouselModule.forRoot(),
    // MatCarouselSlideComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
