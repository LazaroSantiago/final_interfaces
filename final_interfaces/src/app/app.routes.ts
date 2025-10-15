import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PremiumComponent } from './premium/premium.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PodcastComponent } from './podcast/podcast.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'home', component: LandingComponent },
    { path: 'premium', component: PremiumComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'song', component: SongDetailComponent },
    { path: 'playlist', component: PlaylistComponent },
    { path: 'podcast', component: PodcastComponent },
    { path: 'search', component: SearchResultsComponent }
];