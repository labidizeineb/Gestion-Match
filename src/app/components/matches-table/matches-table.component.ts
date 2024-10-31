
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  title: string = " hello , matches list for :"
  actualDate: Date = new Date()
  matches: any = [];
  pageOfItems: Array<any>;
  constructor(private router: Router, private mService: MatchService) { }

  ngOnInit() {
    // this.matches=allMatches;
    this.mService.displayAllMatches().subscribe((response) => {
      console.log("here reponse all matches From BE", response);
      this.matches = response.matches;
    });
  }
  goToDisplay(id: number) {
    this.router.navigate([`matchInfo/${id}`]);

  }
  goToDisplayEdit(id: number) {
    this.router.navigate([`editMatch/${id}`]);

  }
  deleteMatchById(id) {
    this.mService.deleteMatch(id).subscribe((response) => {
      console.log("here response from BE",response.isDeleted);
      
      if (response.isDeleted) {
        this.mService.displayAllMatches().subscribe((res) => {
          console.log("here reponse all matches From BE", res.matches);
          this.matches = res.matches;
        });
    
      }
      console.log("here response delete match by id from BE", response.isDeleted);
    });
  
  
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
