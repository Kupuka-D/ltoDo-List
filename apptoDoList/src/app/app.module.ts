import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Imports para el router
import {routing, appRoutingProviders} from './app.routing';

//Imports de componentes
import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';

import { UpdateTaskComponent } from './components/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    PrincipalComponent,
    ListTasksComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
