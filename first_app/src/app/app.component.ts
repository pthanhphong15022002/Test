import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatButtonComponent } from './chat-button/chat-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_app';
}
