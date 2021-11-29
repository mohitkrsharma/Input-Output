import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Input-Output';
  inputText: string = 'Hi...have a nice day - message from parent';
  receiveChildData(data: any) {
    console.log(data);
  }
}
