
import { Component, EventEmitter, Output } from '@angular/core';
import { City } from '../Interfaces/cities.interface';
import citiesData from '../../../assets/cities.json'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  //Event emiter for the name of the city that will be search
  @Output() cityName: EventEmitter<string> = new EventEmitter();

  //header name in search inbox
  nameSearch: string = 'City';

  //toggle for for the display of the input search
  toggle: boolean = true;

  //array from the JSON data of cities
  cities: City[] = citiesData.cities;

  //variable that will be use to store the filter
  searchText: string = '';

  //swith to disply de input of search
  onClickToggle(): void {
    this.toggle = !this.toggle;
  }

  //conditional to switch to the icon in the search input
  handleKeyUp(xkey: KeyboardEvent): void {
    if (xkey.key === "Enter") {
      this.toggle = !this.toggle;
    }
  }

  //function that send the name of the city selected to app-component and will search in the API
  clickCity(city: string) {
    this.cityName.emit(city);

  }

}
