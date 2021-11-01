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


  weathers:WeatherData[]=[];

  temperature:number=0;
  country:string='';
  city:string='';
  
  buttoninter():void{
    
    this.weatherService.getWeather("tokio").subscribe((data:any)=>{
      
      this.temperature=data.main.temp;
      this.country=data.sys.country;
      this.city=data.name;
      //argumento={}
      //this.weathers.push(argumento);
      console.log(data);
    });
  }
  
}
