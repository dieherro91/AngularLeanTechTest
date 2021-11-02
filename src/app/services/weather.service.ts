import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //environment Variables for the url of the API and the key of the API
  private url:string=environment.API_URL;
  private keys:string=environment.keyAPIstuff;
  
  constructor(private http:HttpClient) { }

  //function that make retrieve the data from de API.
  getWeather(city:string){
    return this.http.get(`${this.url}q=${city}&appid=${this.keys}`);
  }
}
