import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { spyOnClass } from 'jasmine-es6-spies/dist';
import { ProgressBarService } from '../service/progress-bar.service';
import { of } from 'rxjs';


describe('ProgressBarComponent', () => {
    let component: ProgressBarComponent;
    let fixture: ComponentFixture<ProgressBarComponent>;
    let progressBarService: jasmine.SpyObj<ProgressBarService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProgressBarComponent],
            providers: [{ provide: ProgressBarService, useFactory: () => spyOnClass(ProgressBarService) }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProgressBarComponent);
        component = fixture.componentInstance;
        //  fixture.detectChanges();
    });


    it(' should render select options', () => {

        progressBarService = TestBed.get(ProgressBarService);
        progressBarService.progressBarData.and.returnValue(of(
            {
                bars: [88, 19, 89],
                buttons: [29, 36, -24, -22],
                limit: 200
            },
        ));

        fixture.detectChanges();

        expect(component).toBeTruthy();
        expect(component.pickOption).toContain('#progress');


    });


});
