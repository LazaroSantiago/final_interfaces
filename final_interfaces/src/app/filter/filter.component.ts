import { Component } from '@angular/core';
import { ExploreRowComponent } from "../explore-row/explore-row.component";
import { ExploreRowRatingComponent } from "../explore-row-rating/explore-row-rating.component";

@Component({
  selector: 'app-filter',
  imports: [ExploreRowComponent, ExploreRowRatingComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  parentGenres = [
    'Heavy Metal',
    'Grindcore',
    'Rock',
    'Jazz',
    'Classical',
    'Electronic',
    'Hip Hop',
    'Pop',
    'J-pop',
    'Country',
    'Blues',
    'Reggae',
    'Folk',
    'R&B',
    'Punk',
    'Alternative',
    'Indie'
  ]

  parentTypes = [
    'Song',
    'Playlist',
    'Podcast'
  ]

  parentArtists = [
    'LiSA',
    'Kenshi Yonezu',
    'KANA-BOON',
    'Trash Taste Podcast',
    'WeebCast',
    'Pekoe',
    'Various Artists',
    'TK from Ling Tosite Sigure'
  ];
}
