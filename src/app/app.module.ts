import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandPageComponent } from './land-page/land-page.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { QualityOfLifeComponent } from './quality-of-life/quality-of-life.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ProjectsCarouselComponent } from './projects-carousel/projects-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandPageComponent,
    BannerComponent,
    ProjectsPageComponent,
    ProjectsPageComponent,
    OurHistoryComponent,
    AboutUsComponent,
    AboutPageComponent,
    OurProjectsComponent,
    QualityOfLifeComponent,
    AdvantagesComponent,
    FooterComponent,
    ContactComponent,
    MoreInfoComponent,
    ProjectsCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
