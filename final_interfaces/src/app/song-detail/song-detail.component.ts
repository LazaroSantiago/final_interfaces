import { Component } from '@angular/core';
import { ProfileHeaderComponent } from "../profile-header/profile-header.component";
import { CommentSectionComponent } from "../comment-section/comment-section.component";
import { Comment } from "../comment";

@Component({
  selector: 'app-song-detail',
  imports: [ProfileHeaderComponent, CommentSectionComponent],
  templateUrl: './song-detail.component.html',
  styleUrl: './song-detail.component.scss'
})
export class SongDetailComponent {
  song = {
    title: 'Willie the Pimp',
    artist: 'Frank Zappa',
    lyrics: `I'm a little pimp with my hair gassed back
Pair a khaki pants with my shoe shined black

Got a little lady ... walk the street
Tellin' all the boy that she cain't be beat

Twenny dollah bill ( I can set you straight )
Meet me onna corner boy'n don't be late

Man in a suit with a bow-tie neck
Wanna buy a grunt with a third party check

Standin' onna porch of the Lido Hotel
Floozies in the lobby love the way I sell:

HOT MEAT
HOT RATS
HOT CATS
HOT RITZ
HOT ROOTS
HOT SOOTS
HOT ZITZ
HOT MEAT
HOT RATS
HOT CATS
HOT ZITZ
HOT ROOTS
HOT SOOTS`
  };

  comments: Comment[] = [
    {
      id: 1,
      author: 'CaptainBeefheartFan',
      text: 'That iconic violin solo by Sugar Cane Harris is pure madness! The way it clashes with Zappa\'s guitar work creates such a beautifully chaotic atmosphere. This track defines the Hot Rats era for me.',
      date: '2 days ago',
      likes: 37
    },
    {
      id: 2,
      author: 'FreakOutCollector',
      text: 'Don Van Vliet\'s gruff vocal delivery as "Willie" is just perfect. "I\'m a little pimp with my hair gassed back" might be one of the greatest opening lines in rock history. Pure Zappa storytelling genius!',
      date: '1 day ago',
      likes: 42
    },
    {
      id: 3,
      author: 'JazzFusionExplorer',
      text: 'The transition from the bluesy vamp into that insane 10-minute instrumental jam is mind-blowing. Zappa\'s guitar work here is some of his most inspired - you can hear the jazz, blues, and classical influences all fighting for attention.',
      date: '5 hours ago',
      likes: 28
    }
  ];
}
