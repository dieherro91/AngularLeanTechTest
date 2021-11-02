
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherData } from '../Interfaces/weather.interface';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

  
  @Input('nuevoWeather') weathers:WeatherData={'temperature':0,
                                                'city':'',
                                                'country':'',
                                                'weather':'',
                                                'icon':''};

  @Input('letterTemperature') markerTemp:string='';
  
  


  clickCelsius(){
    console.log("entreando celcius")
    console.log(this.markerTemp)
    if(this.markerTemp === 'K'){
      //convertion K to C
      this.weathers.temperature=this.weathers.temperature-273.15;
    } else if (this.markerTemp ==='F') {
      //convertion F to C
      this.weathers.temperature=(this.weathers.temperature-32.0)*(5.0/9.0);
    } else if (this.markerTemp ==='C') {
      //convertion C to C
      
    } else {
      this.weathers.temperature=0;
    }
    this.markerTemp='C';
    console.log(this.weathers.temperature); 
  }
  clickFahrenheit(){
    console.log("entreando farenheit")
    console.log(this.markerTemp)
    if(this.markerTemp === 'K'){
      //convertion K to F
      this.weathers.temperature=(this.weathers.temperature*(9.0/5.0))-459.67;
    } else if (this.markerTemp ==='F') {
      //convertion F to F
      
    } else if (this.markerTemp ==='C') {
      //convertion C to F
      this.weathers.temperature=(this.weathers.temperature*(9.0/5.0))+32.0;
    } else {
      this.weathers.temperature=0;
    }
    this.markerTemp='F';
    console.log(this.weathers.temperature); 
  }
  clickKelvin(){
    console.log("entreando Kelvin")
    console.log(this.markerTemp)
    if(this.markerTemp === 'K'){
      //convertion K to K
      
    } else if (this.markerTemp ==='F') {
      //convertion F to K
      this.weathers.temperature=(this.weathers.temperature+459.67)*(5.0/9.0);
    } else if (this.markerTemp ==='C') {
      //convertion C to K
      this.weathers.temperature=this.weathers.temperature+273.15;
    } else {
      this.weathers.temperature=0;
    }
    this.markerTemp='K';
    console.log(this.weathers.temperature);   
  }
}
