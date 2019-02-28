import { Component, OnInit } from '@angular/core';

//Importo el servicio y la clase servicio con sus metodos
import { TaskService} from '../../services/task.service';
import { Task} from '../../models/taskModel';

//Importo el router
import { Router, ActivatedRoute, Params} from '@angular/router';

//Importamos jquery
import * as $ from 'jquery';
import * as tablesorter from 'tablesorter';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
  providers: [TaskService]
})
export class ListTasksComponent implements OnInit {

  public tasks: Task[];
  public status:String;
  public alerta:boolean;
  public accion:boolean;
  public order:String;

  constructor(
    private _taskService: TaskService,
    private _router: Router,
    private _route: ActivatedRoute) {
      this.order = 'titulo';
     }

  ngOnInit() {
    this.getTasks();


  }

  getTasks(){
    //uso el metodo que cree en service/project.service y el subscribe es para recoger el resultado
    this._taskService.getTasks().subscribe(
      response => {
        this.status = 'success';
        this.tasks = response.tasks;
        console.log(this.tasks);
      }, error=>{
        console.log(<any>error);
        this.status = 'failed';
      });

  }

  confirmar(id){
    this.alerta = confirm("Está seguro que desea eliminar la tarea?");
    if(this.alerta){
      this.deleteTask(id);
    }
    

  }

  deleteTask(id){
    console.log(id);
    this._taskService.deleteTask(id).subscribe(
      response => {
          this.getTasks();
      }, err=>{
        console.log(<any>err);
      });
    

  }


}
