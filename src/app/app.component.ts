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
                         'city':'Select a',
                         'country':'City',
                         'letterT':'K'
                        };
  
  markerTemp:string='K';
  errorMessage:string='';
  

  buttoninter( city : string):void{
    
    this.weatherService.getWeather(`${city}`).subscribe({
      next: (data:any)=>{
    
    this.weathers.temperature=data.main.temp;
    this.weathers.city=data.name;
    this.weathers.country=data.sys.country;
    
    this.weathers.letterT=this.markerTemp='K';

    },
      error: (error)=>{
        this.errorMessage = error.message;
        console.error('There was an error!', error);
        this.weathers.temperature=0;
        this.weathers.city='Error: Please ';
        this.weathers.country='Select a city';
        this.weathers.letterT=this.markerTemp='K';
      }
  });
  }
  
}
