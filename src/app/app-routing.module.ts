import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePComponent } from './home/home-p/home-p.component';

const routes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: '', component: HomePComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
