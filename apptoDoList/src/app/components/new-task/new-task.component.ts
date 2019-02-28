import { Component, OnInit} from '@angular/core';

//Importo el modelo
import { Task } from '../../models/taskModel';

//Importo el servicio y la clase servicio con sus metodos
import { TaskService} from '../../services/task.service';


import * as $ from 'jquery';


@Component({
  selector: 'newTask',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  providers: [TaskService]
})
export class NewTaskComponent implements OnInit {

  public title: string;
  public task: Task;
  public save_task;
  public status:string;

  constructor(
    private _taskService: TaskService
  ){
    this.title = "Nueva Tarea";
    this.task = new Task('','','');
    
  }

  private id = 1;
  public idx: String;

  public getId(){
    return this.id;
  }

  ngOnInit(){
    let n =this.getId();

    
    $(document).ready(
     
      function(){


          //Agregamos la tarea a la tabla
          $('#button').click(
            function(){
                var titulo = $('input[name=titulo]').val();
                var descripcion = $('input[name=descripcion]').val();
                  $('tbody').append('<tr><td>' + n + '</td> <td>'  + titulo + '</a></td> <td>' + descripcion + '</td></tr>');
                  n = n+1;
            });

              
         
         $("input[name=ListItem]").keyup(function(event){
            if(event.keyCode == 13){
              $("#button").click();
            }         
        });
        
        //Eliminamos la tarea en la que se hizo doble click
        $(document).on('dblclick','tr', function(){
          $(this).toggleClass('strike').fadeOut('slow');    
        });
        

        //Sirve para arrastrar y reordenar automaticamente
        $('input').focus(function() {
          $(this).val('');
        });
        
        //$('ol').sortable();  
        
      }
  );
 
   
  }

  onSubmit(form){
    console.log(this.task);
    this.id = this.id +1;
    //uso el metodo que cree en service/project.service y el subscribe es para recoger el resultado
    this._taskService.saveTask(this.task).subscribe(
      response => {
        if(response.task){
          this.idx = response.task._id;
          this.status ='success';
        }
      }, error=>{
        console.log(<any>error);
      });


  }


}
