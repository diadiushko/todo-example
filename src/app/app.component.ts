import { Component } from '@angular/core';

export interface Todo {
  title: string
  desc: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos: Todo[] = [{ title: 'Create an app', desc: 'Create an app for company' }]

  onNewTodo(todo: Todo) {
    this.todos.unshift(todo);
    console.log(this.todos)
  }
}
