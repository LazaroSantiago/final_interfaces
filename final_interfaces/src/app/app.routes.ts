import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PremiumComponent } from './premium/premium.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'home', component: LandingComponent },
    { path: 'premium', component: PremiumComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'profile', component: ProfileComponent },
];
