import { Component, Input } from "@angular/core";
import { CovidService } from "src/app/services/";


@Component({
    selector: 'hello',
    template: `<h1>Hello {{name}}!</h1>`,
    styles: [`h1 {font-family: Lato;}`],
    providers: [CovidService]
})

export class HelloComponent {
    @Input() name: string = 'sef';
    covidData = {} as any;

    constructor(private service: CovidService) {

    }

    ngOnInit() {
        this.service.getHistoricalData()
            .subscribe(response => {
                //    this.covidData = response;
                console.log(response)
            })
    }
}
