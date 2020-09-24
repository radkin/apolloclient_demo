import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
