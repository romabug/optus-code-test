import { TestBed } from '@angular/core/testing';
import { ProgressBarService } from './progress-bar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProgressBarService', () => {

    let service: ProgressBarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProgressBarService],
        });

        service = TestBed.get(ProgressBarService);
    });

    it('should retrieve data from api via GET', () => {
        expect(service.progressBarData()).toBeTruthy();

    });


});
