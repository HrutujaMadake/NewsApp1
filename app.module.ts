import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { CrimeComponent } from './crime/crime.component';
import { HeaderComponent } from './header/header.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { WorldComponent } from './world/world.component';
import { DescriptionPipe } from './description-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BusinessNewsComponent,
    CrimeComponent,
    HeaderComponent,
    PoliticsComponent,
    SportsComponent,
    TechnologyComponent,
    ViewDetailsComponent,
    WorldComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
