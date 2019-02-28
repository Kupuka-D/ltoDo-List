import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/taskModel';
import { Global } from './global';

@Injectable()
export class TaskService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return "Probando la clase";
    }

    //Metodo para guardar el proyecto en la BD
    saveTask(task: Task): Observable<any>{
        //Convierte los datos que llegan en un objeto JSON
        let params = JSON.stringify(task);
        //Establecemos la cabecera para que la informacion viaje como obj json
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //le paso la url mas el metodo que esta en routes mas el obj json y el header http
    
        return this._http.post(this.url+'save-task', params, {headers: headers});
        
    }

    getTasks():Observable<any>{
        //El tipo de dato del contenido
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //Por POST a url con la cabecera
        return this._http.get(this.url+'get-tasks', {headers: headers});

    }

    getTask(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'get-task/'+id, {headers: headers});

    }

    deleteTask(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(id);
        return this._http.delete(this.url+'delete/'+id, {headers: headers});
    }

    updateTask(task):Observable<any>{
        let params = JSON.stringify(task);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(task._id);
        console.log(params);
        return this._http.put(this.url+'update/'+ task._id, params, {headers: headers});

    }


}