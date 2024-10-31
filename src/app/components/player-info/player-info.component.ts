import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css'],
})
export class PlayerInfoComponent implements OnInit {
  title: string = "Info Player";
  playerId: any;
  findedPlayer: any = {};
  constructor(private activatedRoute: ActivatedRoute, private pService: PlayerService) { }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.pService.getPlayerById(this.playerId).subscribe((response) => {
      console.log("here player by id response from BE", response.player);
      this.findedPlayer = response.player;
    });
  }

}
