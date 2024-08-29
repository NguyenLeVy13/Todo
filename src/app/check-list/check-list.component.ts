import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TodoService } from '../Todos/todo.service';

export interface ToDo {
  id: number;
  isChecker: boolean;
  label: string;
}

@Component({
  selector: 'app-check-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.scss',
})
export class CheckListComponent {
  constructor(public todoService: TodoService) {
    this.list = this.todoService.todos;
    this.nData = this.todoService.status;
  }
  list: ToDo[] = [];

  renderList = this.list;

  nData: string = 'all';

  onDeleted(n: number) {
    this.todoService.deleteItem(n);
  }

  onChecked(n: number) {
    this.todoService.checkItem(n);
  }
}
