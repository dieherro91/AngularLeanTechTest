import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url:string=environment.API_URL;
  private keys:string=environment.keyAPIstuff;
  
  constructor(private http:HttpClient) { }

  getWeather(city:string){
    
    return this.http.get(`${this.url}q=${city}&appid=${this.keys}`);
  }
}
