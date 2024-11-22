import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
import { HomeService } from '../../service/home.service';
import { ILocation } from '../../models/ilocation';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrl: './home-p.component.css',
})

export class HomePComponent implements OnInit {
  locations: ILocation[] = []; // Arreglo para almacenar ubicaciones

  constructor(
    private homeService: HomeService, 
    private _user: UsersService, 
    private router: Router) {}

  ngOnInit(): void {
    const numberUsers = this._user.validateUser();

    if (numberUsers == 0) {
      this.router.navigate(['/signIn']);
    }

    this.homeService.getLocations().subscribe(
      (data) => {
        this.locations = data.results; 
        console.log(this.locations);
      },
      (error) => {
        console.error('Error al obtener las ubicaciones:', error);
      }
    );
  }
}
