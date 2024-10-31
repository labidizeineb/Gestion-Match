import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StadiumsService } from 'src/app/services/stadiums.service';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
title : string="Stadium Info";
stadId : any ;
findedStad : any = {};


  constructor(private activatedRoute:ActivatedRoute , private sService : StadiumsService) { }

  ngOnInit() {
    this.stadId=this.activatedRoute.snapshot.paramMap.get('id');
    this.sService.getStadiumById(this.stadId).subscribe((response)=>{
      this.findedStad=response.stadium;
    })
    
  }

}
