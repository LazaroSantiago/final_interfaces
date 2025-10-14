import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  @Input()
  title: string = '';
  @Input()
  artist?: string = '';
  @Input()
  imgSrc?: string = 'ellipse-2.png';
}
