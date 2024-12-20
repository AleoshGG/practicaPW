import { Component, Input } from '@angular/core';
import { Gif } from '../../models/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) gif!: Gif;
}
