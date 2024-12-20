import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private _gifsService: GifsService) {}

  get tags() {
    return this._gifsService.tagsHistory;
  }

  research(tag: string): void {
    this._gifsService.searchTag(tag);
  }
}
