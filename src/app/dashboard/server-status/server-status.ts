import { Node } from '@angular/compiler';
import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatusComponent implements OnInit { // no need to implement OnInit

  /**
   * Tipo um Enum.
   * Só pode estes valores.
   */
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  //private interval?: NodeJS.Timeout;
  //private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect((onCleanup) => {
      /**
       * runs everytime a signal value changes.
       */
      console.log(this.currentStatus());
      onCleanup(() => {
        console.log("oncleanup")
      })
    })
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

}
