import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
title : string ="Info Team"
findedTeam : any = {};

teamId: any ;

  constructor(private activatedRoute:ActivatedRoute , private tService : TeamsService) { }

  ngOnInit() {
    this.teamId=this.activatedRoute.snapshot.paramMap.get('id');
    this.tService.getTeamById(this.teamId).subscribe((response)=>{
      this.findedTeam=response.team;
    })
  }

}
