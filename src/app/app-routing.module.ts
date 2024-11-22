import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePComponent } from './home/home-p/home-p.component';

const routes: Routes = [
  {path: 'home', component: HomePComponent},
  {path: 'signIn', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
