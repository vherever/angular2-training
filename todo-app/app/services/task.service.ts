import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import  { tasks } from '../mock-tasks';

@Injectable()
export class TaskService {
    getTasks() {
        return Promise.resolve(tasks);
    }

    addTask(newTask: Task) {
        tasks.push(newTask);
    }
}