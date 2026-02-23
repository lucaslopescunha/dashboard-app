import { Node } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy { // no need to implement OnInit
  
  /**
   * Tipo um Enum.
   * Só pode estes valores.
   */
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; 
  //private interval?: NodeJS.Timeout;
  private interval?: ReturnType<typeof setInterval>;
  constructor() {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999
      if(rnd < 0.5) {
        this.currentStatus = 'online';
      } else if(rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000)

  }
  
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
