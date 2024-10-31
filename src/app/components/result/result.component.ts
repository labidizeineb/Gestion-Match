import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import jwt_decode from 'jwt-decode';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter();
  user: any;
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    let sessionToken = sessionStorage.getItem("token");
    if (sessionToken) {
      this.user = this.decodeToken(sessionToken);
      console.log("here information user", this.user);
    }
  }

  decodeToken(token: string) {
    return jwt_decode(token);
  }
  scoreColor(sc1: number, sc2: number) {
    if (sc1 > sc2) {
      return ["green", "Win"]

    } else if (sc1 < sc2) {
      return ["orange", "Loss"]
    }
    else {
      return ["blue", "Draw"]
    }
  }
  deleteMatchByAdmin(id: number) {
    this.matchService.deleteMatch(id).subscribe((response) => {
      if (response.isDeleted) {
        this.matchService.displayAllMatches().subscribe((res) => {
          this.newMatches.emit(res.matches);
        })

      }
      console.log("here response delete match by id from BE", response.isDeleted);
    });
  }

}
