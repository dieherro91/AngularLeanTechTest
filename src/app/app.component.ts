import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './main/Interfaces/weather.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //title of the app
  title = 'AngularLeanTechTest';

  //constructor for the use of the service that consult the API
  constructor(private weatherService: WeatherService) { }

  //Inialization of for the weather data
  weathers: WeatherData = {
    'temperature': 0,
    'city': 'Select a',
    'country': 'City',
    'letterT': 'K'
  };

  //marker that is use to track the units of the Temperature
  markerTemp: string = 'K';

  //inicialization of the variable error to show in the console
  errorMessage: string = '';

  //function that GET de data from the Data end stored in the object 'weathers'
  buttoninter(city: string): void {

    //GET solicitud for the API that will store the data in the object 'weathers'
    this.weatherService.getWeather(`${city}`).subscribe({
      next: (data: any) => {

        this.weathers.temperature = data.main.temp;
        this.weathers.city = data.name;
        this.weathers.country = data.sys.country;
        this.weathers.letterT = this.markerTemp = 'K';

      },
      //error management if the GET call is not completed
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);

        this.weathers.temperature = 0;
        this.weathers.city = 'Error: Please ';
        this.weathers.country = 'Select a city';
        this.weathers.letterT = this.markerTemp = 'K';

      }
    });
  }

}
