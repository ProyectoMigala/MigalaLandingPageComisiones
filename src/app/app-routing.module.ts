import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CalendarComponent } from 'src/app/components/calendars/calendar.component';
import { NosotrxsComponent } from 'src/app/components/nosotrxs/nosotrxs.component';
import { ResourceComponent } from './components/resources/resource.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotrxs', component: NosotrxsComponent },
  { path: 'actividades', component: CalendarComponent },
  { path: 'proyectos', component: ResourceComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
