import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//application specific
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HighScoresComponent } from './components/high-scores/high-scores.component';
import { TestModelComponent } from './components/test-model/test-model.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DatabasesComponent } from './components/databases/databases.component';
import { ScoresService } from './services/scores.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HighScoresComponent,
    TestModelComponent,
    NavBarComponent,
    HeaderComponent,
    MessagesComponent,
    DatabasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ScoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
