import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  
  buttoninter():void{
    console.log("hallo")
    this.weatherService.getWeather("miami").subscribe(data=>{
      console.log(data);
    });
  }
}
