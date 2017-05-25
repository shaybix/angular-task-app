import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Task } from './task.model';

@Injectable()
export class TasksService {
    taskAdded = new Subject();
    taskCompleted = new Subject();
    taskDeleted = new Subject();
    taskEdited = new Subject();


    constructor(private _http: Http) {}


    loadTasks() {
        return this._http.get('api/tasks')
        .map(
         (response: Response) => <Task[]> response.json()
        )
    }

    createTask(task: Task) {
        return this._http.post('api/tasks', task)
        .map(
            (response: Response) => <Task> response.json()
        )
        .subscribe(
            (response) => {this.taskAdded.next(response)},
            (error) => {console.log(error)},
            () => {}
        )
    }

    deleteTask(index: number, task: Task) {
        return this._http.delete(`api/tasks/${task.id}`)
        .map(
            (response: Response) => <Task> response.json()
        )
        .subscribe(
            (response) => {this.taskDeleted.next(index)},
            (error) => {console.log(error)},
            () => {}
        )
    }

    saveTask(index: number, task: Task) {
        return this._http.put(`api/tasks/${task.id}`, task)
        .map(
            (response: Response) => <Task> response.json()
        ).subscribe(
            (response) => {this.taskEdited.next({"index": index, "task": response})},
            (error) => {console.log(error)},
            () => {}
        )
    }

    completeTask(task: Task) {
        return this._http.put(`api/tasks/${task.id}`, task)
        .map(
            (response: Response) => <Task> response.json()
        )
    }

}
