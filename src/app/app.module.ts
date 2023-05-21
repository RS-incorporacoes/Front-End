import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandPageComponent } from './land-page/land-page.component';
import { BannerComponent } from './land-page/banner/banner.component';
import { OurHistoryComponent } from './land-page/our-history/our-history.component';
import { AboutUsComponent } from './land-page/about-us/about-us.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { OurProjectsComponent } from './land-page/our-projects/our-projects.component';
import { QualityOfLifeComponent } from './land-page/quality-of-life/quality-of-life.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandPageComponent,
    BannerComponent,
    OurHistoryComponent,
    AboutUsComponent,
    AboutPageComponent,
    OurProjectsComponent,
    QualityOfLifeComponent,
    FooterComponent,
    ContactComponent,
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
