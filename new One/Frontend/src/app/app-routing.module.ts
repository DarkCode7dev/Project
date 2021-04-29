import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Login.component';


const routes: Routes = [

  { path: '',  redirectTo:'login',pathMatch:'full' },
  {path: 'login', component: LoginComponent},
  {path:"reactive", loadChildren:()=>import('./reactive/reactive.module').then(mod=>mod.ReactiveModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
