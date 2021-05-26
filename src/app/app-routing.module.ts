import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagetypesComponent } from './pagetypes/pagetypes.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: 'pageCategories', component: PagetypesComponent },
  { path: 'userTemplates', component: UserComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [PagetypesComponent, UserComponent, EmployeesComponent];