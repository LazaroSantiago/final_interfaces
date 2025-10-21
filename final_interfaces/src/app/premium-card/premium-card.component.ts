import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card',
  imports: [],
  templateUrl: './premium-card.component.html',
  styleUrl: './premium-card.component.scss'
})
export class PremiumCardComponent {
  @Input()
  title: string = '';
  @Input()
  text: string = '';
  @Input()
  price: number = 4399;
  @Input()
  plusUltra: boolean = false;
  @Input()
  buttonText: string = '';
}
