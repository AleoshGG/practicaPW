import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePComponent } from './home-p/home-p.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HomeModule { }
