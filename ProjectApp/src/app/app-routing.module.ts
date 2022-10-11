import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestModelComponent } from './test-model/test-model.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'high-scores', component: HighScoresComponent},
  {path: 'test-model', component: TestModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
