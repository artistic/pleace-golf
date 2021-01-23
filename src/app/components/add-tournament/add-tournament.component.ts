import { Component, OnInit } from '@angular/core';
import Tournament from 'src/app/models/tournament.model';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {

  tournaments: Tournament = new Tournament();
  submitted = false;

  constructor(private tournamentService: TournamentsService) { }

  ngOnInit(): void {
  }

  saveTournament(): void {
    this.tournamentService.create(this.tournaments).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tournaments = new Tournament();
  }

}
