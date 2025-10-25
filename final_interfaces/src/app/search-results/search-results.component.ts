import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FilterComponent } from "../filter/filter.component";

interface SearchResult {
  id: number;
  title: string;
  artist: string;
  genre: string;
  album?: string;
  coverart: string;
  rating: number;
  type: 'song' | 'podcast' | 'playlist';
  isFavorite: boolean;
  duration: string;
}

@Component({
  selector: 'app-search-results',
  imports: [CommonModule, FilterComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

  constructor(private router: Router) { }
  showFilters = false;

  results: SearchResult[] = [
    // Songs
    {
      id: 1,
      title: 'Gurenge',
      artist: 'LiSA',
      genre: 'J-pop',
      album: 'Demon Slayer OST',
      coverart: 'gurenge.jpg',
      rating: 5,
      type: 'song',
      isFavorite: true,
      duration: '3:45'
    },
    {
      id: 2,
      title: 'Kick Back',
      artist: 'Kenshi Yonezu',
      genre: 'J-pop',

      album: 'Chainsaw Man OST',
      coverart: 'kickback.jpg',
      rating: 4,
      type: 'song',
      isFavorite: false,
      duration: '3:12'
    },
    {
      id: 3,
      title: 'Silhouette',
      artist: 'KANA-BOON',
      genre: 'J-pop',

      album: 'Naruto Shippuden OST',
      coverart: 'silhouette.jpg',
      rating: 5,
      type: 'song',
      isFavorite: true,
      duration: '3:58'
    },
    // Podcasts
    {
      id: 4,
      title: 'Trash Taste Highlights',
      artist: 'Trash Taste Podcast',
      genre: 'Podcast',

      coverart: 'trashtaste.jpg',
      rating: 4,
      type: 'podcast',
      isFavorite: false,
      duration: '45:22'
    },
    {
      id: 5,
      title: 'Anime Discussion Special',
      artist: 'WeebCast',
      genre: 'Podcast',

      coverart: 'weebcast.jpg',
      rating: 3,
      type: 'podcast',
      isFavorite: true,
      duration: '1:22:15'
    },
    // Playlists
    {
      id: 6,
      title: 'J-pop Mix 2024',
      artist: 'Pekoe',
      genre: 'J-pop',

      coverart: 'J-pop-mix.jpg',
      rating: 5,
      type: 'playlist',
      isFavorite: true,
      duration: '2:15:30'
    },
    {
      id: 7,
      title: 'Anime Opening Classics',
      artist: 'Various Artists',
      genre: 'J-pop',

      coverart: 'anime-classics.jpg',
      rating: 4,
      type: 'playlist',
      isFavorite: false,
      duration: '1:45:12'
    },
    // More songs
    {
      id: 8,
      title: 'Peace Sign',
      artist: 'Kenshi Yonezu',
      genre: 'J-pop',

      album: 'My Hero Academia OST',
      coverart: 'peacesign.jpg',
      rating: 4,
      type: 'song',
      isFavorite: false,
      duration: '3:52'
    },
    {
      id: 9,
      title: 'Unravel',
      artist: 'TK from Ling Tosite Sigure',
      genre: 'J-pop',

      album: 'Tokyo Ghoul OST',
      coverart: 'unravel.jpg',
      rating: 5,
      type: 'song',
      isFavorite: true,
      duration: '4:21'
    },
    {
      id: 10,
      title: 'Crossing Field',
      artist: 'LiSA',
      genre: 'J-pop',

      album: 'Sword Art Online OST',
      coverart: 'crossingfield.jpg',
      rating: 4,
      type: 'song',
      isFavorite: false,
      duration: '4:08'
    }
  ];

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  toggleFavorite(item: SearchResult, event: Event) {
    event.stopPropagation();
    item.isFavorite = !item.isFavorite;
  }

  navigateToItem(item: SearchResult) {
    switch (item.type) {
      case 'song':
        this.router.navigate(['/song']);
        break;
      case 'podcast':
        this.router.navigate(['/podcast']);
        break;
      case 'playlist':
        this.router.navigate(['/playlist']);
        break;
    }
  }
}