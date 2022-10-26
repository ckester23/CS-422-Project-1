import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabasesComponent } from './components/databases/databases.component';
import { HighScoresComponent } from './components/high-scores/high-scores.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TestModelComponent } from './components/test-model/test-model.component';

//add paths to flask endpoints
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'high-scores', component: HighScoresComponent},
  {path: 'test-model', component: TestModelComponent},
  {path: 'databases', component: DatabasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
