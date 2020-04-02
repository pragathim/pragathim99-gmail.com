import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentapp='Hello component from app.component';
  title = 'app';

  clickHandler()
  {
    alert("Hello Button");
  }
}
