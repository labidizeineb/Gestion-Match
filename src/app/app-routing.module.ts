import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumsComponent } from './components/stadiums/stadiums.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { PlayersTeamComponent } from './components/players-team/players-team.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';



const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"login" , component:LoginComponent}, 
  {path:"signup" , component:SignUpComponent},
  {path:"signupAdmin" , component:SignUpComponent},
  {path:"allMatches" , component:MatchesComponent},
  {path:"allPlayers" , component:PlayersComponent},
  {path:"allTeams" , component:TeamsComponent},
  {path:"allStadiums" , component:StadiumsComponent},
  {path:"matchForm" , component:MatchFormComponent},
  {path:"playerForm" , component:PlayerFormComponent},
  {path:"addTeam" , component:AddTeamComponent},
  {path:"editTeam" , component:EditTeamComponent},
  {path:"admin" , component:AdminComponent},
  {path:"matchInfo/:id" , component:MatchInfoComponent},
  {path:"editMatch/:id" , component:MatchFormComponent},
  {path:"search" , component:SearchComponent},
  {path:"addStadium" , component:AddStadiumComponent},
  {path:"playerInfo/:id" , component:PlayerInfoComponent},
  {path:"editPlayer/:id" , component:PlayerFormComponent},
  {path:"teamInfo/:id" , component:TeamInfoComponent},
  {path:"editTeam/:id" , component:AddTeamComponent},
  {path:"stadiumInfo/:id" , component:StadiumInfoComponent},
  {path:"editStadium/:id" , component:AddStadiumComponent},
  {path:"playersByTeam/:id" , component:PlayersTeamComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"weather" , component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
