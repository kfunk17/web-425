/*
   Title:  app.module.ts
   Author: Karie Funk
   Date: 02/15/2020
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	BrowserAnimationsModule,
	FlexLayoutModule,
	MatButtonModule,
	MatIconModule,
	MatMenuModule,
	MatToolbarModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatSelectModule,
	MatCardModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
