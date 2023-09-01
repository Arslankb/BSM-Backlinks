import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './about/brand/brand.component';
import { BrandPublisherComponent } from './about/brand-publisher/brand-publisher.component';
import { CeoStoryComponent } from './about/ceo-story/ceo-story.component';
import { FeaturesComponent } from './features/features.component';
import { SubContactComponent } from './features/sub-contact/sub-contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FrequentlyQuestionireComponent } from './frequently-questionire/frequently-questionire.component';
import { ConsultationComponent } from './frequently-questionire/consultation/consultation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BrandComponent,
    BrandPublisherComponent,
    CeoStoryComponent,
    FeaturesComponent,
    SubContactComponent,
    ReviewsComponent,
    FrequentlyQuestionireComponent,
    ConsultationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
