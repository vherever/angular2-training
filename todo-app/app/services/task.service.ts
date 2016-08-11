import { Injectable } from '@angular/core';
import  { tasks } from '../mock-tasks';

@Injectable()
export class TaskService {
    getTasks() {
        return Promise.resolve(tasks);
    }
}