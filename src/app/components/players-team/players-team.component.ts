import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-players-team',
  templateUrl: './players-team.component.html',
  styleUrls: ['./players-team.component.css']
})
export class PlayersTeamComponent implements OnInit {
  title : string ="Players Team";
  teamId: any;
  playersTeamTab: any = [];
  constructor(private activatedRoute: ActivatedRoute, private tService: TeamsService) { }

  ngOnInit() {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.tService.displayAllPlayersTeam(this.teamId).subscribe((response) => {
      this.playersTeamTab = response.teamPlayers;
    })
  }

}
