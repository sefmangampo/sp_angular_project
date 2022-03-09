import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { CovidService } from 'src/app/services';
import { Router } from '@angular/router';
/*
aged_65_older: 3.186
aged_70_older: 1.957
cardiovasc_death_rate: 218.612
code: "IRQ"
continent: "Asia"
diabetes_prevalence: 8.83
excess_mortality: null
excess_mortality_cumulative: null
excess_mortality_cumulative_absolute: null
excess_mortality_cumulative_per_million: null
extreme_poverty: 2.5
female_smokers: null
gdp_per_capita: 15663.986
handwashing_facilities: 94.576
hosp_patients: null
hosp_patients_per_million: null
hospital_beds_per_thousand: 1.4
human_development_index: 0.674
icu_patients: null
icu_patients_per_million: null
id: 100
last_updated_date: "2022-02-28"
life_expectancy: 70.6
location: "Iraq"
male_smokers: null
median_age: 20
new_cases: 1203
new_cases_per_million: 29.214
new_cases_smoothed: 1364.143
new_cases_smoothed_per_million: 33.127
new_deaths: 14
new_deaths_per_million: 0.34
new_deaths_smoothed: 16.143
new_deaths_smoothed_per_million: 0.392
new_people_vaccinated_smoothed: 21238
new_people_vaccinated_smoothed_per_hundred: 0.052
new_tests: 20703
new_tests_per_thousand: 0.503
new_tests_smoothed: 17223
new_tests_smoothed_per_thousand: 0.418
new_vaccinations: null
new_vaccinations_smoothed: 39844
new_vaccinations_smoothed_per_million: 968
people_fully_vaccinated: 6791628
people_fully_vaccinated_per_hundred: 16.49
people_vaccinated: 9874526
people_vaccinated_per_hundred: 23.98
population: 41179351
population_density: 88.125
positive_rate: 0.111
reproduction_rate: 0.54
stringency_index: 64.81
tests_per_case: 9
tests_units: "samples tested"
total_boosters: null
total_boosters_per_hundred: null
total_cases: 2302793
total_cases_per_million: 55921.061
total_deaths: 24989
total_deaths_per_million: 606.833
total_tests: 17887384
total_tests_per_thousand: 434.378
total_vaccinations: 16785945
total_vaccinations_per_hundred: 40.76
weekly_hosp_admissions: null
weekly_hosp_admissions_per_million: null
weekly_icu_admissions: null
weekly_icu_admissions_per_million: null
*/

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
  providers: [CovidService]
})
export class CovidComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent | undefined;

  constructor(private service: CovidService, private router: Router) { }


  store: any;

  async ngOnInit() {
    this.store = await this.service.getLatestData()
  }

  onSelectBoxValueChanged = params => {
    const selectedItem = params.selectedItem;

    if (selectedItem) {
      this.dataGrid?.instance.filter(['id', '=', selectedItem.id])
    } else
      this.dataGrid?.instance.clearFilter()
  }


  customizeColumns = columns => {
    //console.log(columns)
  }

  goToCountry = obj => {
    const id = obj.row.key;
    this.router.navigate(['/country', { id: id }])
  }

  columns = [{
    datafield: 'id',
    visible: false
  }, {
    datafield: 'location',
    visible: true
  },
  {
    datafield: 'code',
    visible: true
  },
  {
    datafield: 'continent',
    visible: true
  },
  {
    datafield: 'total_cases',
    visible: true
  },
  {
    datafield: 'population',
    visible: true
  }
  ]

}
