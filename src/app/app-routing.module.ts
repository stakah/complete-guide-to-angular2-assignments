import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { S05AppComponent } from './section05/app/app.component';

const routes: Routes = [
  { path: 's05assignment1', component: S05AppComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
