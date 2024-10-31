import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  title: string = "Matches"
  matches: any = [];
  constructor(private mService: MatchService) { }

  ngOnInit() {
    this.mService.displayAllMatches().subscribe((response) => {
      this.matches = response.matches;
    })
  }
  updateMatches(T) {
    this.matches = T;
  }

}
