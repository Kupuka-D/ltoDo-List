import { Component, OnInit } from '@angular/core';

//Importo el servicio y la clase servicio con sus metodos
import { TaskService} from '../../services/task.service';
import { Task } from '../../models/taskModel';

//Router, parametros
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
  providers: [TaskService]
})
export class UpdateTaskComponent implements OnInit {

  public task: Task;
  public status: String;


  constructor(
    private _taskService: TaskService,
    public _route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    //Capturo el id que llega por ruta para buscar tarea en BD
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getTask(id);
    });

  }

  getTask(id){
    this._taskService.getTask(id).subscribe(
      response =>{
        console.log(response);
        this.task = response.task;
      },
      err=>{
        console.log(<any>err);
      }
    )
    }

    updateTask(){
      console.log(this.task);
      this._taskService.updateTask(this.task).subscribe(
        response => {
          console.log(this.task);
          this.status = 'success';
        },
        err => {
          console.log(<any>err);
          this.status = 'error';
        }
      )
    }

}
