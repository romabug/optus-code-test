import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {


    @Input()
    public percent: number;

    @Input()
    public limit: number;


    public isRed: boolean;
    public showPercent: number;

    constructor() {
    }

    ngOnInit() {
        this.showPercent = this.percent;
    }


    updateBar(num: number) {

        this.percent = this.percent + num;

        if (this.percent >= this.limit) {
            this.showPercent = this.limit;
            this.percent = this.limit;
        }
        else if (this.percent <= 0) {
            this.showPercent = 0;
            this.percent = 0;
        } else {
            this.showPercent = this.percent;
        }
        this.isRed = this.percent >= 100 ? true : false;

    }


}
