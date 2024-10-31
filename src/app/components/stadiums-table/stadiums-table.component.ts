import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumsService } from 'src/app/services/stadiums.service';

@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css']
})
export class StadiumsTableComponent implements OnInit {
stadiums:any=[];
  constructor(private router : Router , private sService : StadiumsService) { }

  ngOnInit() {
    this.sService.displayAllStadiums().subscribe((response) => {
      console.log("here reponse all matches From BE", response);
      this.stadiums = response.stadiums;
    });
  }
  goToDisplay(id: number) {
    this.router.navigate([`stadiumInfo/${id}`]);

  }
  goToDisplayEdit(id: number) {
    this.router.navigate([`editStadium/${id}`]);

  }
  deleteStadium(id : number){
    this.sService.deleteStadium(id).subscribe((response) => {
      if (response.stadiumIsDeleted) {
        this.sService.displayAllStadiums().subscribe((res) => {
          
          this.stadiums = res.stadiums;
        });
    
      }
      
    });
  }

}
