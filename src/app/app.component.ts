import { Component} from '@angular/core';
import { WeatherService } from './services/weather.service';
import {WeatherData} from './main/Interfaces/weather.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLeanTechTest';
  

  constructor(private weatherService: WeatherService){}


  weathers:WeatherData={'temperature':0,
                         'city':'Select',
                         'country':'City',
                         'weather':'',
                         'icon':''
                        };
  
  markerTemp:string='';
  errorMessage:string='';
  

  buttoninter( city : string):void{
    
    this.weatherService.getWeather(`${city}`).subscribe({
      next: (data:any)=>{
    
    this.weathers.temperature=data.main.temp;
    this.weathers.city=data.name;
    this.weathers.country=data.sys.country;
    this.weathers.weather=data.weather[0].description;
    this.weathers.icon=data.weather[0].icon;
    
    this.markerTemp='K';

    console.log(this.weathers)
    },
      error: (error)=>{
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
  });
  }
  
}
