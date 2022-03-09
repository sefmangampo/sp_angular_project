import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { CovidPieChartComponent } from './components/covid-pie-chart/covid-pie-chart.component';
import { CovidTimelineChartComponent } from './components/covid-timeline-chart/covid-timeline-chart.component';
import { AllComponent } from './pages/all/all.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'map', component: MapComponent
  },
  {
    path: 'all', component: AllComponent
  },
  {
    path: 'country', component: CovidPieChartComponent
  },
  {
    path: 'timeline', component: CovidTimelineChartComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
