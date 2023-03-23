import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private apiUrl = 'http://localhost:8000/api/todo/';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.apiUrl);
  }

  addTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  editTask(task: any) {
    return this.http.put(`${this.apiUrl}${task.id}/`, task);
  }
}
