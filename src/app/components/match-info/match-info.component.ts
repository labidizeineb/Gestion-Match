import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMatches } from 'src/app/data/matcheData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
title:string="Match Info";
matchId:any;
matches:any=allMatches;
findedMatch:any;
  constructor(private activatedRoute:ActivatedRoute, private mService : MatchService) { }

  ngOnInit() {
this.matchId=this.activatedRoute.snapshot.paramMap.get('id');
this.mService.getMatchById(this.matchId).subscribe((response)=>{
  console.log("Here response fet match by id From BE ", response);
  this.findedMatch=response.match;
});
// this.findedMatch = this.matches.find((match) => match.id ==this.matchId);
  }
}
