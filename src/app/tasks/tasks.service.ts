import { Subject } from 'rxjs/Subject';

export class TasksService {
    tasksAdded = new Subject();
    taskCompleted = new Subject();
    taskDeleted = new Subject();
}
