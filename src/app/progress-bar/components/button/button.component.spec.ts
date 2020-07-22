import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create control buttons ', () => {
        expect(component).toBeTruthy();
    });


    it('should render control buttons to adjust bar value', () => {

        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('button');
        expect(el.classList).toContain('control-btn');
    });


});
