import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponent } from './bar.component';

describe('BarComponent', () => {
    let component: BarComponent;
    let fixture: ComponentFixture<BarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create base bar', () => {
        expect(component).toBeTruthy();
    });

    it('should render bar percentage value', () => {

        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('span');
        expect(el.classList).toContain('text');
    });


});
