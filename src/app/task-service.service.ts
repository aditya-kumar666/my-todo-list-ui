import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Task } from './models/task';

@Injectable()
export class TaskServiceService {

  baseUrl = 'https://localhost:44323/';
  constructor(private http:Http) { }

  getTasks() {
    return this.http.get(this.baseUrl + 'api/Tasks/GetTask');
  }

  getHistoricTasks() {
    return this.http.get(this.baseUrl + 'api/Tasks/GetHistoricTask');
  }

  saveTasks(taskList: Task[]) {
    return this.http.post(this.baseUrl + 'api/Tasks/PostTaskList', taskList);
  }
}
