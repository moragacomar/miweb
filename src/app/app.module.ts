import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { BannerComponent } from './components/banner/banner.component'
import { FooterComponent } from './components/footer/footer.component'
import { MainComponent } from './components/main/main.component'
import { AboutComponent } from './components/about/about.component'
import { FactsComponent } from './components/facts/facts.component'
import { SkillsComponent } from './components/skills/skills.component'
import { ResumeComponent } from './components/resume/resume.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { ServicesComponent } from './components/services/services.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { ContactComponent } from './components/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
