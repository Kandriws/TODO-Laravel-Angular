import { Component, OnInit } from '@angular/core';
import { Task } from "./to-do";
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.toDoListService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  addTask(task: any) {
    this.toDoListService.addTask(task).subscribe((data: any) => {
      this.tasks.push(data);
    });
  }

  deleteTask(id: number) {
    this.toDoListService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }

  editTask(task: any) {
    this.toDoListService.editTask(task).subscribe(() => {
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    });
  }
}
