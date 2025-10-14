import { Component } from '@angular/core';
import { ProfileHeaderComponent } from "../profile-header/profile-header.component";

@Component({
  selector: 'app-podcast',
  imports: [ProfileHeaderComponent],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent {
  podcastDescription = {
    content: `🎃 Get limited-edition Halloween snacks from Japan with #TokyoTreat
        https://team.tokyotreat.com/TRASHTASTE-TT102025

        👉 Use code "TRASHTASTE" to save $5 OFF your first order or sign-up for a multi-month plan for a limited time
        gift!

        👻 Ships globally—including the USA!📝Visit https://bit.ly/TTGoogleGemini to sign up and learn more about Google
        Gemini. Terms apply.🩺Search and compare high quality doctors suited for your needs by heading over to
        ⁠⁠https://www.zocdoc.com/trash⁠⁠

        🥤Buy Waifu Cups at https://gamersupps.gg/TrashTaste with code [trashtaste]Follow Trash Taste:
        
        https://twitter.com/TrashTastePod
        
        https://www.reddit.com/r/TrashTaste/

        To watch the podcast on YouTube: bit.ly/TrashTasteYouTube

        Don't forget to subscribe to the podcast for free wherever you're listening or by using this link:
        bit.ly/TrashTastePodcast

        If you like the show, telling a friend about it would be amazing! You can text, email, Tweet, or send this link
        to a
        friend: bit.ly/TrashTastePodcast
        Learn more about your ad choices.`
  };
}
