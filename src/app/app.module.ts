import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesService } from './pages.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagetypesComponent } from './pagetypes/pagetypes.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    PagetypesComponent,
    UserComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
