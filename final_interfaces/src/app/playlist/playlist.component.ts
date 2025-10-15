import { Component } from '@angular/core';
import { ProfileHeaderComponent } from "../profile-header/profile-header.component";
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommentSectionComponent, Comment } from "../comment-section/comment-section.component"; // Add this import

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  rating: number;
  dateAdded: string;
  duration: string;
}

@Component({
  selector: 'app-playlist',
  imports: [ProfileHeaderComponent, FormsModule, MatTooltipModule, CommentSectionComponent], // Add CommentSectionComponent
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {
  tracks: Track[] = [
    {
      id: 1,
      title: 'Gurenge',
      artist: 'LiSA',
      album: 'Demon Slayer OST',
      rating: 5,
      dateAdded: '2024-01-15',
      duration: '3:45'
    },
    {
      id: 2,
      title: 'Kick Back',
      artist: 'Kenshi Yonezu',
      album: 'Chainsaw Man OST',
      rating: 4,
      dateAdded: '2024-01-20',
      duration: '3:12'
    },
    {
      id: 3,
      title: 'Silhouette',
      artist: 'KANA-BOON',
      album: 'Naruto Shippuden OST',
      rating: 5,
      dateAdded: '2024-01-10',
      duration: '3:58'
    },
    {
      id: 4,
      title: 'Peace Sign',
      artist: 'Kenshi Yonezu',
      album: 'My Hero Academia OST',
      rating: 4,
      dateAdded: '2024-01-25',
      duration: '3:52'
    },
    {
      id: 5,
      title: 'Unravel',
      artist: 'TK from Ling Tosite Sigure',
      album: 'Tokyo Ghoul OST',
      rating: 5,
      dateAdded: '2024-01-05',
      duration: '4:21'
    },
    {
      id: 6,
      title: 'Crossing Field',
      artist: 'LiSA',
      album: 'Sword Art Online OST',
      rating: 4,
      dateAdded: '2024-01-18',
      duration: '4:08'
    },
    {
      id: 7,
      title: 'Inferno',
      artist: 'Mrs. GREEN APPLE',
      album: 'Fire Force OST',
      rating: 3,
      dateAdded: '2024-01-22',
      duration: '3:45'
    },
    {
      id: 8,
      title: 'Black Rover',
      artist: 'Vickeblanka',
      album: 'Black Clover OST',
      rating: 4,
      dateAdded: '2024-01-12',
      duration: '3:31'
    },
    {
      id: 9,
      title: 'Kaikai Kitan',
      artist: 'Eve',
      album: 'Jujutsu Kaisen OST',
      rating: 5,
      dateAdded: '2024-01-08',
      duration: '3:41'
    },
    {
      id: 10,
      title: 'Shinzo wo Sasageyo!',
      artist: 'Linked Horizon',
      album: 'Attack on Titan OST',
      rating: 5,
      dateAdded: '2024-01-30',
      duration: '5:16'
    }
  ];

  playCount: number = 1247;

  comments: Comment[] = [
    {
      id: 1,
      author: 'AnimeFan42',
      text: 'This playlist is amazing! Perfect for studying and working out! 🎵',
      date: '2 days ago',
      likes: 24
    },
    {
      id: 2,
      author: 'JpopLover',
      text: 'Great selection! Missing some Yoasobi though 😊',
      date: '1 day ago',
      likes: 15
    },
    {
      id: 3,
      author: 'MusicCollector',
      text: 'The transitions between tracks are so smooth. Well curated!',
      date: '5 hours ago',
      likes: 8
    }
  ];

  onCommentAdded(commentText: string): void {
    const newComment: Comment = {
      id: this.comments.length + 1,
      author: 'Current User',
      text: commentText,
      date: 'Just now',
      likes: 0
    };

    this.comments.unshift(newComment);
  }
}