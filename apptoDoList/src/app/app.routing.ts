
//Imports para el touter
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Imports de mis componentes
import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

const appRoutes: Routes = [
    //Si ponemos el AppComponent como principal lo carga dos veces, desde acá y desde el index con la etiqueta root
    {path: 'new-task', component: NewTaskComponent},
    {path: 'list-tasks', component: ListTasksComponent},
    {path: '', component: PrincipalComponent},
    {path: 'update-task/:id', component: UpdateTaskComponent}
];

//Exporta todas las rutas guardadas en const
export const appRoutingProviders: any [] = [];
//Exporta el routing
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);