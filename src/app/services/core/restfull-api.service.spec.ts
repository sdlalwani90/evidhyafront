import { TestBed, inject } from '@angular/core/testing';

import { RestfullApiService } from './restfull-api.service';

describe('RestfullApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RestfullApiService]
        });
    });

    it('should be created', inject([RestfullApiService], (service: RestfullApiService) => {
        expect(service).toBeTruthy();
    }));
});
