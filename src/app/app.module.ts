import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponentComponent } from './components/student-component/student-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { IfrenderComponent } from './components/ifrender/ifrender.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    ParentComponentComponent,
    IfrenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
