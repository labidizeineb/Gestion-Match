import { Component, OnInit  } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any=[];
  title:string="Players";
  pageOfItems: Array<any>;
  constructor(private pService : PlayerService) { }

  ngOnInit() {
this.pService.getAllPlayers().subscribe((response)=>{
  this.players=response.players;
})
  }

onChangePage(pageOfItems: Array<any>) {
 
 this.pageOfItems = pageOfItems;
 }

}
