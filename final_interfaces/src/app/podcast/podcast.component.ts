import { Component } from '@angular/core';
import { ProfileHeaderComponent } from "../profile-header/profile-header.component";
import { CommentSectionComponent } from "../comment-section/comment-section.component"; // Add this import
import { Comment } from "../comment";

@Component({
  selector: 'app-podcast',
  imports: [ProfileHeaderComponent, CommentSectionComponent],
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

  comments: Comment[] = [
    {
      id: 1,
      author: 'CoffeeAndPodcasts',
      text: 'This episode had me literally laughing out loud during my commute! People in traffic probably thought I was crazy. Can\'t wait for the next one! 😂',
      date: '2 days ago',
      likes: 24
    },
    {
      id: 2,
      author: 'AudioTechNerd',
      text: 'The audio mixing in this episode was exceptional! The background music levels were perfect - present enough to set the mood but never overwhelming the dialogue.',
      date: '1 day ago',
      likes: 15
    },
    {
      id: 3,
      author: 'LongTimeListener',
      text: 'As someone who\'s been following since episode 1, it\'s incredible to see how much the show has evolved. The production quality and depth of research just keeps getting better!',
      date: '5 hours ago',
      likes: 8
    }
  ];
}
