import { Component } from '@angular/core';
import { CarrouselComponent } from "../carrousel/carrousel.component";
import { Track } from '../track';
import { ProfileHeaderComponent } from "../profile-header/profile-header.component";

@Component({
  selector: 'app-profile',
  imports: [CarrouselComponent, ProfileHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  row1: Track[] = [
    { title: 'J-pop Mix', artist: 'Pekoe', collection: 'Playlist', coverart: 'jpop.png', year: 2020, rating: 2, isShareable: true },
  ]

  row2: Track[] = [
    { title: 'Willie the Pimp', artist: 'Frank Zappa', collection: "Hot Rats", coverart: 'hotrats.jpg', year: 1969, rating: 5, heartActive: true },
    { title: 'Money', artist: 'Pink Floyd', collection: "The Dark Side of the Moon", coverart: 'darkside.png', year: 1971, rating: 5, heartActive: true },
    { title: 'Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict', artist: 'Pink Floyd', collection: 'Ummagumma', coverart: 'ummagumma.jpg', year: 1969, rating: 5, heartActive: true },
    { title: 'The Court of the Crimson King', artist: 'King Crimson', collection: 'In the Court of the Crimson King', coverart: 'inthecourt.jpg', year: 1969, rating: 5, heartActive: true },
    { title: 'Master of Puppets', artist: 'Metallica', collection: 'Master of Puppets', coverart: 'puppets.jpg', year: 1985, rating: 5, heartActive: true },
    { title: 'Introduce Me to Your Family', artist: 'Otoboke Beaver', collection: 'Itekoma Hits', coverart: 'itekoma.jpg', year: 2019, rating: 5, heartActive: true },
    { title: 'Black Sabbath', artist: 'Black Sabbath', collection: 'Black Sabbath', coverart: 'sabbath.jpg', year: 1971, rating: 5, heartActive: true },
  ]
}
