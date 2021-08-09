import { TemarioComponent } from './temario/temario.component';
import { SaraComponent } from './sara/sara.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "sara",
    component: SaraComponent
  },
  {
    path: "temario",
    component: TemarioComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
