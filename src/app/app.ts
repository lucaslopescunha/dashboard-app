import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { ServerStatusComponent } from './dashboard/server-status/server-status';
import { TrafficComponent } from "./dashboard/traffic/traffic";
import { TicketsComponent } from "./dashboard/tickets/tickets";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item";
import { ControlComponent } from './shared/control/control';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent]
})
export class AppComponent {
}
