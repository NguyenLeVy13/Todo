import { Component } from '@angular/core';

import { CheckListComponent } from './check-list/check-list.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, CheckListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
