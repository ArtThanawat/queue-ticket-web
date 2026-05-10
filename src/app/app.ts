import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppToast } from './shared/components/app-toast/app-toast';
import { ConfirmDialog } from './shared/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-root',
  imports: [AppToast, ConfirmDialog, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('queue-ticket-web');
}
