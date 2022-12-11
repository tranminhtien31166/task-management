import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/helpers';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './layouts/admin.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'task-manager',
        loadChildren: () => import('@app/pages/task-manager/task-manager.module').then(task => task.TaskManagerModule), data: { preload: true }
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    // CustomPreloadingStrategyService
  ],
  declarations: [
  ]
})
export class AppRoutingModule { }
