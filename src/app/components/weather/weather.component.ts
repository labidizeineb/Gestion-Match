

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title: string = "Search Weather City";
  searchForm: FormGroup;
 dataWearth : any ;

  constructor(private searchGr: FormBuilder,private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchForm = this.searchGr.group({
      cityInput: ['', [Validators.required]],

    });
  }
  searchWeatherCity(){
    this.weatherService.displayCitySearch(this.searchForm.value).subscribe((response)=>{
      console.log("Here Response from back end  : ",response.dataWearth);
      this.dataWearth=response.dataWearth;
     
    });
  }

}
