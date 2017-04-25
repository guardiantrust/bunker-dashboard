import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app/app-routing.module';

import { CompanyService } from '../app/modules/company/services/company.service';

import { AppComponent } from './app.component';
import { CompanyListComponent } from '../app/modules/company/list/company-list.component';
import { CompanyProfileComponent } from '../app/modules/company/profile/company-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ CompanyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
