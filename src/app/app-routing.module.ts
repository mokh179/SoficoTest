import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewComponent } from './add-new/add-new.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  // {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"add",component:AddNewComponent},
  {path:"details/:id",component:PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
