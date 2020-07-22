import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProgressBarService } from '../service/progress-bar.service';

export interface ProgressBar {
    buttons: number[];
    bars: number[];
    limit: number;
}


@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})


export class ProgressBarComponent implements OnInit {

    constructor(
        private dataService: ProgressBarService
    ) {
    }


    public demoName = 'Progress Bar Demo';
    public authorInfo = 'tony cai, email: hanchangcai@gmail.com';
    public progressData: ProgressBar;
    public progressString = '#progress';
    public pickOption: string = this.progressString + ' 1';


    @ViewChildren('selectedBar')
    public selectBar: QueryList<any>;


    ngOnInit() {

        this.dataService.progressBarData().subscribe(
            data => {
                data.buttons.sort((a, b) => a - b);
                this.progressData = data;
            },
            error => {
                console.log('testBar data error');
            }
        );


    }


    public handleButtonHit(event) {

        const pick: number = parseInt(this.pickOption[this.pickOption.length - 1], 10) - 1;

        this.selectBar.find(
            (item, index) => {
                return index === pick;
            }
        ).updateBar(event);

    }


}
