import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { ProgressbarComponent } from "./progressbar/progressbar.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, FooterComponent, ProgressbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'final_interfaces';
}
