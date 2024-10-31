import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumsService } from 'src/app/services/stadiums.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  btnTitle: string = "Add Stadium"
  StadiumForm: FormGroup;
  stadId: any;
  stad: any ={};

  constructor(private StadiumFormValue: FormBuilder, private activatedRoute: ActivatedRoute, private sService: StadiumsService, private router: Router) { }


  ngOnInit() {
    this.StadiumForm = this.StadiumFormValue.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      team: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      capacity: ['', [Validators.required, Validators.min(1)]],
    });
    this.stadId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.stadId) {
      this.btnTitle = "Edit Stadium";
      this.sService.getStadiumById(this.stadId).subscribe((response) => {

        this.stad = response.stadium;

      });
    }
  }

  addOrEditStadium() {
    // console.log(this.StadiumForm.value);
    // let tabStadium=JSON.parse(localStorage.getItem("stadiums") ||"[]");
    // let obj = this.StadiumForm.value;
    // obj.id= this.generateId(tabStadium);
    // tabStadium.push(obj);
    // localStorage.setItem("stadiums", JSON.stringify(tabStadium));

    if (this.stadId) {
      this.sService.editStadium(this.stad).subscribe((response) => {
        this.router.navigate(["admin"]);
      });
    } else {
      this.sService.addStadium(this.StadiumForm.value).subscribe((response) => {
        console.log("here reponse Edit Match from BE", response.stadiumIsAdded);
      });
    }

  }

}
