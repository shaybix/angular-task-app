import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/Http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Task } from './task.model';

@Injectable()
export class TasksService {
    tasksAdded = new Subject();
    taskCompleted = new Subject();
    taskDeleted = new Subject();
    tasksEdited = new Subject();

    constructor(private _http: Http) {}


    loadTasks() {
        return this._http.get('api/tasks').map(
            (response: Response) => <Task[]> response.json()
        );
    }

    createTask(task: Task) {}

    deleteTask(task: Task) {}

    saveTask(task: Task) {}

}
