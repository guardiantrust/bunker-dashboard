import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from '../app/modules/company/list/company-list.component';
import { CompanyProfileComponent } from '../app/modules/company/profile/company-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/companylist', pathMatch: 'full' },
  { path: 'companylist', component: CompanyListComponent },
  { path: 'company/profile/:id', component: CompanyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
