import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//custom
import { SearchCustomersComponent } from './search-customers/search-customers.component';

const routes: Routes = [
  { path: 'searchCustomers', component: SearchCustomersComponent },
  { path: '', redirectTo: '/searchCustomers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
