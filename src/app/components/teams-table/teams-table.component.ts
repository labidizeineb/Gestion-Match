import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teams:any=[];
  constructor(private router:Router ,  private tService : TeamsService) { }

  ngOnInit() {
    this.tService.displayAllTeams().subscribe((response)=>{
      console.log("here Display all teams response for BE",response.teams)
      this.teams=response.teams;
     });
  }
  goToDisplay(id: number) {
    this.router.navigate([`teamInfo/${id}`]);

  }
  goToDisplayEdit(id: number) {
    this.router.navigate([`editTeam/${id}`]);

  }
  goToDisplayPlayersTeam(id: number) {
    this.router.navigate([`playersByTeam/${id}`]);

  }
  deleteTeam(id : any){
    this.tService.deleteTeam(id).subscribe((response) => {
      if (response.TeamIsDeleted) {
        this.tService.displayAllTeams().subscribe((res) => {
          this.teams = res.teams;
        });
    
      }
      console.log("here response delete match by id from BE", response.TeamIsDeleted);
    });
  
  }

}
