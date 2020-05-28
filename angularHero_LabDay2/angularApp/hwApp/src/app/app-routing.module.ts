import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { DefaultComponent } from './default/default.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  
  // {path: 'one', component: AppComponent},
  {path: 'two', component: CompTwoComponent},
  {path: 'three', component: CompThreeComponent},
  {path: 'default', component: DefaultComponent},
  {path: '', redirectTo: '/default', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
