import { Component } from '@angular/core';
import { ProfileHeaderComponent } from "../profile-header/profile-header.component";

@Component({
  selector: 'app-song-detail',
  imports: [ProfileHeaderComponent],
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
}
