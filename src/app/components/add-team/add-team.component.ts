import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';





@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  btnTitle: string = "Add Team";
  teamForm:FormGroup;
  teamId : any; 
  team : any ={};
  imagePreview : string ;
  constructor(private teamFormGroup:FormBuilder , private activatedRoute : ActivatedRoute, private tService : TeamsService , private router : Router) { }

  ngOnInit() {
    this.teamForm=this.teamFormGroup.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
      owner: ['',[Validators.required,Validators.minLength(4)]],
      foundation: ['',[Validators.required,Validators.pattern(/^[0-9]{4}$/)]],
      stadium: ['',[Validators.required,Validators.minLength(5)]],
      img: [''],
    });
this.teamId=this.activatedRoute.snapshot.paramMap.get('id');
if (this.teamId) {
  this.btnTitle="Edit Team";
 this.tService.getTeamById(this.teamId).subscribe((response)=>{
  console.log("here team by Id response for BE",response.team);
  this.team=response.team;

 });
}
  }
  addOrEditTeam(){
   console.log("this team object is",this.teamForm.value);
   if (this.teamId) {
     this.tService.editTeam(this.team).subscribe((response)=>{
  console.log("here Edit team response for BE",response.isUpdated);
  this.router.navigate(["admin"]);
});
   } else {
    this.tService.addTeam(this.teamForm.value,this.teamForm.value.img).subscribe((response)=>{
      console.log("here Add team response for BE",response.objectIsAdded);
    });
      
   }
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.teamForm.patchValue({ img: file });
    this.teamForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  // fusionLigne(): any {

  //   for (let i = 0; i < this.tab.length; i++) {
  //     for (let j = i + 1; j < this.tab.length; j++) {
  //       if (this.tab[i].name == this.tab[j].name) {
  //         this.tab[i].price = this.tab[i].price + this.tab[j].price;
  //         this.tab.splice(j, 1);


  //       }

  //     }
  //   }
  //         console.log("fusion",this.tab);

  //   let tabFusion = this.tab;
  //   let auxTable: any;
  //   for (let i = 0; i < tabFusion.length - 1; i++) {
  //     for (let j = i + 1; j < tabFusion.length; j++) {
  //       if (tabFusion[j].price > tabFusion[i].price) {
  //         auxTable = tabFusion[i];

  //         tabFusion[i] = tabFusion[j];
  //         tabFusion[j] = auxTable;
  //       }
  //     }
  //   }
  //   console.log("Sorting",tabFusion);

  // }


}
