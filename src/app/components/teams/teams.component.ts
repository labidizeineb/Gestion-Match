import { Component, OnInit } from '@angular/core';
import { allTeams } from 'src/app/data/teamData';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
title:string="Teams";
teams:any=[];
  constructor(private tService : TeamsService) { }

  ngOnInit() {
    this.tService.displayAllTeams().subscribe((response)=>{
      this.teams=response.teams;
    })
  }

}
