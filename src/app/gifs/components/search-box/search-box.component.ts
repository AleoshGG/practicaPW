import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  //Refetencia HTML      Variable    Tipo
  @ViewChild('TagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this._gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}