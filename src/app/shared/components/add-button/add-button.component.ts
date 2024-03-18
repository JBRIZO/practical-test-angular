import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Section } from '../../interfaces/section.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, RouterOutlet, CommonModule, MatButtonModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  @Input() section? : Section;
}
