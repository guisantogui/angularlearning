import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListrenderComponent } from './components/listrender/listrender.component';
import { StudentComponentComponent } from './components/student-component/student-component.component';

const routes: Routes = [
  {path:'', component: StudentComponentComponent},
  {path:'list', component: ListrenderComponent },
  {path:'emitter', component: EmitterComponent},
  {path:'change-number', component:ChangeNumberComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
