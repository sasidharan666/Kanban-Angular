import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanComponentStandalone } from "./kanbanclient/kanbanclient.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KanbanComponentStandalone],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';
  image:string="images/"
}
