import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-header',
  imports: [],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {
  @Input()
  title: string = '';
  @Input()
  artist?: string = '';
  @Input()
  imgSrc?: string = 'ellipse-2.png';
}
