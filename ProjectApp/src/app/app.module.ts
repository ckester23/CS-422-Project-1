import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ScoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
