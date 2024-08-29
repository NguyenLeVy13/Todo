import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { TodoService } from '../Todos/todo.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {

  constructor(private  todoService :TodoService) {}

  onEntered(n: Event) {
    const inputValue = (n.target as HTMLInputElement).value;
    this.todoService.saveValue(inputValue)
  }

  allChecked() {
    this.todoService.toggleAll()
  }
 
}
