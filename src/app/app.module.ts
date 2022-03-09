import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './components/map/map.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DxChartModule, DxNumberBoxModule, DxDataGridModule, DxLoadPanelModule, DxPieChartModule, DxSelectBoxModule, DxToolbarModule } from 'devextreme-angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CovidComponent } from './components/covid/covid.component';
import { CovidGridComponent } from './components/covid-grid/covid-grid.component';
import { CovidHistoricalChartComponent } from './components/all/covid-historical-chart/covid-historical-chart.component';
import { CovidPieChartComponent } from './components/covid-pie-chart/covid-pie-chart.component';
import { CovidTimelineChartComponent } from './components/covid-timeline-chart/covid-timeline-chart.component';
import { AllComponent } from './pages/all/all.component';
import { ControlsComponent } from './components/all/controls/controls.component';
import dxNumberBox from 'devextreme/ui/number_box';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavigationComponent,
    DashboardComponent,
    CovidComponent,
    CovidGridComponent,
    CovidHistoricalChartComponent,
    CovidPieChartComponent,
    CovidTimelineChartComponent,
    AllComponent,
    ControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxToolbarModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxLoadPanelModule,
    DxChartModule,
    DxPieChartModule,
    DxNumberBoxModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
