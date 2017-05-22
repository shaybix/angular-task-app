import { Component, OnInit} from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  task: {id: number, title: string, completed: boolean} = {
    "id": null,
    "title": "",
    "completed": false
  };

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }


  onAddTask(form: NgForm){
    let task  = this.task;
    task.title = form.value.title;
    this.tasksService.tasksAdded.next(task);
    form.reset();

    console.log(form.value.title);

  }

}
