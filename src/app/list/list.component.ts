import { Component, OnInit } from '@angular/core';
import { Task } from 'app/models/task';
import { TaskServiceService } from 'app/task-service.service';
import { map, retry, catchError } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private taskService: TaskServiceService) { }
  public isSaving: boolean = false;
  public isGetting: boolean = false;
  public isGettingHistory: boolean = false;
  public taskList : Task [] =[];

  ngOnInit() {
    this.getTasks();
  }

  addTask(){
    this.taskList.push(new Task());
  }

  saveTask(){
    this.isSaving = true;
    this.taskService.saveTasks(this.taskList).subscribe(() => {this.isSaving = false});
  }

  removeTask(index:number){
    if(index > -1){
      this.taskList.splice(index,1);
    }
  }

  getTasks() {
    this.isGetting = true;
    this.taskService.getTasks()
    .subscribe((r: any) => 
    {
      this.taskList = JSON.parse(r._body);
      this.isGetting = false;
    });    
  }

  getHistoricTask() {
    this.isGettingHistory = true;
    this.taskService.getHistoricTasks()
    .subscribe((r: any) => 
    {
      this.taskList = JSON.parse(r._body);
      this.isGettingHistory = false;
    });    
  }
}
