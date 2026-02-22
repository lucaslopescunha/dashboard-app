import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatusComponent {
  currentStatus = 'online';

}
