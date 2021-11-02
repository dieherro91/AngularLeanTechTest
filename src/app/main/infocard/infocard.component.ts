
import { Component,  Input, Output, OnInit, EventEmitter} from '@angular/core';
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

  @Output() cityName2:EventEmitter<string>=new EventEmitter();

  @Input('nuevoWeather') weathers:WeatherData={'temperature':0,
                                                'city':'',
                                                'country':'',
                                              'letterT':'K'};

  markerTemp:string=this.weathers.letterT;
  titleWeater:string='';
  clickCity(city:string){
    this.cityName2.emit(city);
    this.markerTemp='K';
  }

  clickCelsius(){
    
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
  }
  clickFahrenheit(){
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
 
  }
  clickKelvin(){
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
  }

  temp:number=0;
  titleHeat():any{
    this.temp=this.weathers.temperature;
    if (this.temp<293.15 && this.markerTemp==='K'){
      return 'Cold'
    } else if (this.temp>=293.15 && this.temp<=299.15 && this.markerTemp==='K'){
      return 'Warm'
    } else if ( this.temp>299.15 && this.markerTemp==='K'){
      return 'Hot';
    } else if (this.temp<19&& this.markerTemp==='C'){
      return 'Cold'
    } else if (this.temp>=19 && this.temp<=26 && this.markerTemp==='C'){
      return 'Warm'
    } else if ( this.temp>26 && this.markerTemp==='C'){
      return 'Hot';
    }  else if (this.temp<66.2 && this.markerTemp==='F'){
      return 'Cold'
    } else if (this.temp>=66.2 && this.temp<=78.8 && this.markerTemp==='F'){
      return 'Warm'
    } else if ( this.temp>78.8 && this.markerTemp==='F'){
      return 'Hot';
    }
  }


}
