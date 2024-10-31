import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
match:any={};
id : any ="651aaa5311610e1da4d10967"
  constructor(private mService : MatchService) { }
  ngOnInit() {
this.mService.getMatchById(this.id).subscribe((response)=>{
  this.match=response.match;
})
  }

  

}
