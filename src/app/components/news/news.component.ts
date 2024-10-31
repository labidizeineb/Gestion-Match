import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
players:any=[];
  constructor(private pService : PlayerService) { }

  ngOnInit() {
this.pService.getAllPlayers().subscribe((response)=>{
  this.players=response.players;
})
  }

}
