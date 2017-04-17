import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from '../app/modules/company/list/company-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/companyProfile', pathMatch: 'full' },
  { path: 'companyprofile', component: CompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
