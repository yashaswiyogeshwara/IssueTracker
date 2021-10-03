import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {
    path:'',
    loadChildren:() => import('./ProjectBoard/project-board.module').then(mod => mod.ProjectBoardModule)
  },
  {
    path:'signUp',
    loadChildren:() => import('./sign-up/sign-up.module').then(mod => mod.SignUpModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
