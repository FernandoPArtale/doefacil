import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './screens/main-menu/main-menu.component';
import { LoginComponent } from './screens/login/login.component';
import { OrganizationsListComponent } from './screens/org/organizations-list/organizations-list.component';
import { ViewOrganizationComponent } from './screens/org/view-organization/view-organization.component';
import { CausesListComponent } from './screens/cause/causes-list/causes-list.component';
import { ViewCauseComponent } from './screens/cause/view-cause/view-cause.component';
import { RegisterComponent } from './screens/register/register.component';
import { PasswordRecoveryComponent } from './screens/password-recovery/password-recovery.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
  { path: 'esqueceu-senha', component: PasswordRecoveryComponent },
  { path: 'sobre-nos', component: AboutUsComponent },
  { path: 'organizacao', component: OrganizationsListComponent },
  { path: 'organizacao/visualizar/:id', component: ViewOrganizationComponent },
  { path: 'causa', component: CausesListComponent },
  { path: 'causa/visualizar/:id', component: ViewCauseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
