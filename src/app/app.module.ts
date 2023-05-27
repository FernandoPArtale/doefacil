import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './screens/main-menu/main-menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NguCarouselModule } from '@ngu/carousel'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './screens/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrganizationsListComponent } from './screens/org/organizations-list/organizations-list.component';
import { ViewOrganizationComponent } from './screens/org/view-organization/view-organization.component';
import { CausesListComponent } from './screens/cause/causes-list/causes-list.component';
import { ViewCauseComponent } from './screens/cause/view-cause/view-cause.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NavBarComponent,
    LoginComponent,
    OrganizationsListComponent,
    ViewOrganizationComponent,
    CausesListComponent,
    ViewCauseComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //Material Modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    //Other Modules
    GoogleMapsModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
