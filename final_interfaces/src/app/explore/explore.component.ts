import { Component } from '@angular/core';
import { ExploreRowComponent } from '../explore-row/explore-row.component';

@Component({
  selector: 'app-explore',
  imports: [ExploreRowComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})


export class ExploreComponent {
  parentGenres = [
    'Heavy Metal',
    'Grindcore',
    'Rock',
    'Jazz',
    'Classical',
    'Electronic',
    'Hip Hop',
    'Pop',
    'Country',
    'Blues',
    'Reggae',
    'Folk',
    'R&B',
    'Punk',
    'Alternative',
    'Indie'
  ]

  parentMoods = [
    "Sleep",
    "Party",
    "Relax",
    "Work-Out",
    "Wellness",
    "Focus",
    "Romance",
    "Bondi",
  ]

  parentDecades = [
    "1950s",
    "1960s",
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
    "2020s",
  ]
}
