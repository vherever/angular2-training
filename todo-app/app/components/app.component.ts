import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.component.html',
    providers: [TaskService]
})

export class AppComponent {
    constructor(private _taskService: TaskService) {}
    public tasks = [];
    public newTask: Task = {
        name: '',
        dueDate: '',
        done: false
    };

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    addTask(newTask: Task) {
        this._taskService.addTask(newTask);
        this.newTask = {
            name: '',
            dueDate: '',
            done: false
        }
    }
}