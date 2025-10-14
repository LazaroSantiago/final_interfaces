import { Component } from '@angular/core';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { Track } from '../track';

@Component({
  selector: 'app-landing',
  imports: [CarrouselComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  row1: Track[] = [
    { title: 'Willie the Pimp', artist: 'Frank Zappa', collection: "Hot Rats", coverart: 'hotrats.jpg', year: 1969, rating: 5, heartActive: true },
    { title: 'Money', artist: 'Pink Floyd', collection: "The Dark Side of the Moon", coverart: 'darkside.png', year: 1971, rating: 5, heartActive: true },
    { title: 'Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict', artist: 'Pink Floyd', collection: 'Ummagumma', coverart: 'ummagumma.jpg', year: 1969, rating: 5, heartActive: true },
    { title: 'The Court of the Crimson King', artist: 'King Crimson', collection: 'In the Court of the Crimson King', coverart: 'inthecourt.jpg', year: 1969, rating: 5, heartActive: true },
    { title: 'Master of Puppets', artist: 'Metallica', collection: 'Master of Puppets', coverart: 'puppets.jpg', year: 1985, rating: 5, heartActive: true },
    { title: 'Introduce Me to Your Family', artist: 'Otoboke Beaver', collection: 'Itekoma Hits', coverart: 'itekoma.jpg', year: 2019, rating: 5, heartActive: true },
    { title: 'Black Sabbath', artist: 'Black Sabbath', collection: 'Black Sabbath', coverart: 'sabbath.jpg', year: 1971, rating: 5, heartActive: true },
  ]
  row2: Track[] = [
    { title: 'Blinding Lights', artist: 'The Weeknd', collection: 'After Hours', coverart: 'afterhours.png', year: 2020, rating: 4 },
    { title: 'Levitating', artist: 'Dua Lipa', collection: 'Future Nostalgia', coverart: 'futurenostalgia.png', year: 2020, rating: 5 },
    { title: 'Peaches', artist: 'Justin Bieber', collection: 'Justice', coverart: 'justice.png', year: 2021, rating: 3 },
  ]
  row3: Track[] = [
    { title: 'J-pop Mix', artist: 'Pekoe', collection: 'Playlist', coverart: 'jpop.png', year: 2020, rating: 2 },

  ]

  row4: Track[] = [
    { title: 'Abroad in Japan', artist: 'Chris Broad', collection: 'Podcast', coverart: 'abroad.png', year: 2020, rating: 4, isPodcast: true },
    { title: 'Trash Taste', artist: 'Trash Taste', collection: 'Podcast', coverart: 'trashtaste.jpg', year: 2020, rating: 4, isPodcast: true },
  ]
}