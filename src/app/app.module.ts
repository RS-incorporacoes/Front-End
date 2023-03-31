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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandPageComponent,
    BannerComponent,
    ProjectsPageComponent,
    ProjectsPageComponent,
    OurHistoryComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
