import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PremiumComponent } from './premium/premium.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'home', component: LandingComponent },
    { path: 'premium', component: PremiumComponent },
];
