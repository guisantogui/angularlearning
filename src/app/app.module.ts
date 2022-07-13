import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponentComponent } from './components/student-component/student-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { IfrenderComponent } from './components/ifrender/ifrender.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListrenderComponent } from './components/listrender/listrender.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    ParentComponentComponent,
    IfrenderComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListrenderComponent,
    TwoWayBindingComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
