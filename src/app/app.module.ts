import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import {HeaderComponent}from './header/header.component';
import{PostCreateComponent}from './post/post-create/post-create.component';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule  } from '@angular/material/card';
import{ MatButtonModule }from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{ MatSidenavModule }from '@angular/material/sidenav';
import{ MatIconModule }from '@angular/material/icon';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreateComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
