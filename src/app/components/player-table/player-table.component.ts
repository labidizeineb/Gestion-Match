import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  players : any;
  constructor(private router: Router,private pService :PlayerService) { }

  ngOnInit() {
    this.pService.getAllPlayers().subscribe((response)=>{
      console.log("here all players response from BE",response.players);
      this.players=response.players;
    })
  }
  goToDisplay(id: number) {
    this.router.navigate([`playerInfo/${id}`]);

  }
  goToDisplayEdit(id: number) {
    this.router.navigate([`editPlayer/${id}`]);

  }
  deletePlayer(id : number){
this.pService.deletePlayerById(id).subscribe((response)=>{
  if (response.playerIsDeleted) {
    this.pService.getAllPlayers().subscribe((res)=>{
      
      this.players=res.players;
    });
  }
  
})
  }

}
