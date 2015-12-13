'use strict';

export class TodoService {
	todoList: string[];
	constructor() {
		console.log("some todo service");
		this.todoList = ["get milk", "feed baby", "sleep", "go for a walk"];
	}

	getTodos(text: string) {
		console.log(text, this.todoList);
	}

	addTodos(todo:string) {
		this.todoList.push(todo);
	}
}