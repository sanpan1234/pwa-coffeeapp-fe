import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    if ((navigator as any).standalone === false) {
      //this is an iOS device and we are in the browser.
      this.snackBar.open('You can add this PWA to the Home Screen, you know!',
        null, { duration: 3000 });
    }
  }
}
