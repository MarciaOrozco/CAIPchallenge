import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTruckComponent } from './components/create-truck/create-truck.component';
import { HomeComponent } from './components/home/home.component';
import { TrucksComponent } from './components/trucks/trucks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trucks', component: TrucksComponent},
  {path: 'createtruck', component: CreateTruckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
