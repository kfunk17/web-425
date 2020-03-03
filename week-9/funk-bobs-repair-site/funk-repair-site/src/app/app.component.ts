import { Component } from '@angular/core';
import { SwitcherService } from './switcher.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SwitcherService]
})
export class AppComponent {
  title = 'app'; 
  constructor(public switchService: SwitcherService){
  }

   
}
