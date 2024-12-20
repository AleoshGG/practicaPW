import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../models/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];

  private API_KEY: string = 'DlF0AYcilhZcOVT9I6LR1Ipq1FeYdfrp';
  private URL_BASE: string = 'https://api.giphy.com/v1/gifs';

  constructor(private _http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 15);
    this.saveToLocalStorage();
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')
      .set('q', tag);

    this._http
      .get<SearchResponse>(`${this.URL_BASE}/search`, { params: params })
      .subscribe((res) => {
        this.gifsList = res.data;
      });
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('gifsHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('gifsHistory')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('gifsHistory')!);

    if (this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0]);
    }
  }
}
