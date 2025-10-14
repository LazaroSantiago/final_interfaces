import { Component } from '@angular/core';
import { PremiumCardComponent } from '../premium-card/premium-card.component';

@Component({
  selector: 'app-premium',
  imports: [PremiumCardComponent],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss'
})
export class PremiumComponent {
  parentText1: string = "1 Premium Account"
  parentText2: string = "2 Premium Account"
  parentText3: string = "6 Premium Account"
  parentText4: string = "6 Premium Account"
}
