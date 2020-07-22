import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input()
    public action: number;

    @Output()
    public actionEmitter: EventEmitter<number> = new EventEmitter();


    constructor() {
    }

    ngOnInit() {
    }


    onClick(item: number) {
        this.actionEmitter.emit(item);
    }


}
