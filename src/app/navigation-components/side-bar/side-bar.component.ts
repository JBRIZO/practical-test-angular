import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatSidenavModule,CommonModule, MatDividerModule, MatIconModule, RouterModule, MatButtonModule, RouterLinkActive, RouterLink, RouterOutlet],
  providers: [UserService],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() isSideBarOpened : boolean = true;
}
