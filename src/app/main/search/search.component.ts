
import { Component, OnInit } from '@angular/core';
import { City } from '../Interfaces/cities.interface';
import citiesData from '../../../assets/cities.json'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  nameSearch:string ='City';
  toggle : boolean = true;
  cities : City[] =citiesData.cities;
  
  onClickToggle(){
    this.toggle = !this.toggle;
  }

  handleKeyUp(xkey:KeyboardEvent){
     if(xkey.key==="Enter"){
      this.toggle = !this.toggle;
     }
  }

}
