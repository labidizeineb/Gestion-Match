import { Component, OnInit } from '@angular/core';
import { StadiumsService } from 'src/app/services/stadiums.service';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
title:string="Stadiums";
stadiums:any=[];
  constructor(private sService : StadiumsService) { }

  ngOnInit() {
   this.sService.displayAllStadiums().subscribe((response)=>{
    this.stadiums=response.stadiums;
   })
  }

}
