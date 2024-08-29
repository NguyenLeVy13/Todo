import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { ToDo } from '../check-list/check-list.component';
import { TodoService } from '../Todos/todo.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
  }

  todos: ToDo[] = [];

  sumItems() {
    return this.todos.filter((x) => !x.isChecker).length;
  }

  onClicked(n: string) {
    this.todoService.clickItem(n);
    
  }

  onCleared() {
    this.todoService.clearCompleted();
    console.log('clear', this.todoService.clearCompleted())
  }
}
