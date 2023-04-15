import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './telas/menu-principal/menu-principal.component';
import { CredenciadoModule } from './credenciado/credenciado.module';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from '@ssegning-web/mat-carousel';
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    NavBarComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //App Modules
    CredenciadoModule,
    //Angular Material Modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
