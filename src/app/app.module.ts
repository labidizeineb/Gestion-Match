import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingComponent } from './components/standing/standing.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { UniqueOccPipe } from './pipes/unique-occ.pipe';
import { MyFiltrePipe } from './pipes/my-filtre.pipe';
import { SearchComponent } from './components/search/search.component';

import { HttpClientModule } from "@angular/common/http";
import { MyFiltrePricePipe } from './pipes/my-filtre-price.pipe';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumsComponent } from './components/stadiums/stadiums.component';
import { StadiumsTableComponent } from './components/stadiums-table/stadiums-table.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { PlayersTeamComponent } from './components/players-team/players-team.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    SignUpComponent,
    MatchFormComponent,
    PlayerFormComponent,
    AddTeamComponent,
    EditTeamComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayerTableComponent,
    TeamsTableComponent,
    BannerComponent,
    MatchInfoComponent,
    ReversePipe,
    AsterixPipe,
    UniqueOccPipe,
    MyFiltrePipe,
    SearchComponent,
    MyFiltrePricePipe,
    AddStadiumComponent,
    StadiumsComponent,
    StadiumsTableComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    StadiumInfoComponent,
    PlayersTeamComponent,
    ProfileComponent,
    WeatherComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
