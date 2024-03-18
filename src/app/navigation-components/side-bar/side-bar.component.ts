import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../../shared/interfaces/user.interface';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [HttpClientModule, MatSidenavModule,CommonModule, MatDividerModule, MatIconModule, RouterModule, MatButtonModule, RouterLinkActive, RouterLink, RouterOutlet],
  providers: [UserService],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {
  @Input() isSideBarOpened : boolean = true;
  userInfo? : User;
  errorMessage? : string;
  isLoading? : boolean;

  constructor (private userService : UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() : void {
    this.isLoading = true;
    this.userService.getUser(1).subscribe({
      next: user => {
        this.userInfo = user
        this.isLoading = false;
      },
      error: err => {
        this.errorMessage = err
        this.isLoading = false;
      }
    })
  }
}
