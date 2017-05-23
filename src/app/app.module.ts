import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdToolbarModule, 
  MdMenuModule, 
  MdButtonModule, 
  MdIconModule,
  MdCardModule,
  MdCheckboxModule,
  MdInputModule,
  MdGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { TaskInputComponent } from './tasks/task-input/task-input.component';
import { TasksService } from './tasks/tasks.service';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskItemComponent,
    TaskInputComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdCheckboxModule,
    MdInputModule,
    FormsModule,
    MdGridListModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
