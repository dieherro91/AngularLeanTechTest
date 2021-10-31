
import { Component, OnInit } from '@angular/core';

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
  
  onClickToggle(){
    this.toggle = !this.toggle;
  }

  handleKeyUp(x:KeyboardEvent){
     console.log(x)
     if(x.key==="Enter"){
      this.toggle = !this.toggle;
     }
  }
}
