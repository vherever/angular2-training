import { Component } from '@angular/core';
import { TaskService } from '../services/task.service'

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.component.html',
    providers: [TaskService]
})

export class AppComponent {
    constructor(private _taskService: TaskService) {}
    public tasks = [];

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }
}