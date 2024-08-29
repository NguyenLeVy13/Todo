import { Injectable } from '@angular/core';

interface ToDo {
  id: number;
  label: string;
  isChecker: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  todos: ToDo[] = [];
  status: string = '';
  nextID = 1;

  saveValue(input: string) {
    this.todos.push({
      id: this.nextID++,
      isChecker: false,
      label: input,
    });
  }

  deleteItem(id: number) {
    this.todos = this.todos.filter((x) => x.id !== id);
  }

  checkItem(id: number) {
    const todo = this.todos.find((x) => x.id === id);
    if (todo) {
      todo.isChecker = !todo.isChecker;
    }
  }

  toggleAll() {
    const allChecked = this.todos.every((x) => x.isChecker);

    if (allChecked) {
      this.todos.forEach((x) => (x.isChecker = false));
    } else {
      this.todos.forEach((x) => (x.isChecker = true));
    }
  }

  clickItem(n: string) {
    this.status = n;
    console.log(n);
  }

  clearCompleted() {
    this.todos = this.todos.filter((x) => !x.isChecker);
    console.log('service', this.todos)
  }
}
