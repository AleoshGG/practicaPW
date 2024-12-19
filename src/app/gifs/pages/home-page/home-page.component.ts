import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../models/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private _gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this._gifsService.gifsList;
  }
  
}
