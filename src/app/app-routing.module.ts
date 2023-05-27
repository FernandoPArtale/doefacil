import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './screens/main-menu/main-menu.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
