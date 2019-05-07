import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyCVIFSnQK3mFe2nukxmzLUnoIk01uWvwMI',
      authDomain: 'masuperagence-b7934.firebaseapp.com',
      databaseURL: 'https://masuperagence-b7934.firebaseio.com',
      projectId: 'masuperagence-b7934',
      storageBucket: 'masuperagence-b7934.appspot.com',
      messagingSenderId: '1045546189326'
    };
    firebase.initializeApp(config);

  }
}
