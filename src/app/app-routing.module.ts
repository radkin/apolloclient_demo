import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { AppComponent } from './app.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';

const routes: Routes = [
  { path: 'app-search-customers', component: SearchCustomersComponent },
  { path: 'app', component: AppComponent },

  { path: '', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
