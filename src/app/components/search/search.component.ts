import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: string = "Search"
  filteredResults: any;
  searchForm: FormGroup;
  constructor(private searchGr: FormBuilder, private mService: MatchService) { }

  ngOnInit() {
    this.searchForm = this.searchGr.group({
      searchInput: ['', [Validators.required]],

    });

  }
  searchMatchByScore(score: number) {
    this.mService.getMatchByScore(score).subscribe((response) => {
      console.log("here results of search from BE", response.matchesSerchedByScore)
      this.filteredResults = response.matchesSerchedByScore;
    });

  }
  // resultFiltre(matches: any, score: any): any {
  //   if (score == undefined) {
  //     return matches;
  //   }
  //  return( matches.filter((obj) => {
  //     return (
  //       obj.scoreOne==score ||
  //       obj.scoreTwo==score
  //     )
  //   }))
  // }
  // onSearchClick(event: Event) {
  //   event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
  //   this.filteredResults = this.resultFiltre(this.matches, this.searchForm.controls['searchInput'].value);
  //   // Affichez les résultats après le clic sur le bouton "Search"
  //   this.showResults = true;
  // }

}
