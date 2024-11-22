import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { ILocation } from '../../models/ilocation';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrls: ['./home-p.component.css'], 
})
export class HomePComponent implements OnInit {
  locations: ILocation[] = []; // Arreglo para almacenar ubicaciones

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
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
