
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

  cityInitial:string='city missing';
  countryInitial:string='Please Select City'
  temperatureInitial:string='X'
  // @Input('nuevodata') nuevo: WeatherData={
  //   nombre:'',
  //   poder:0,
  // }
  // @Output() onNuevoPersonaje:EventEmitter<WeatherData>=new EventEmitter();

  
}
