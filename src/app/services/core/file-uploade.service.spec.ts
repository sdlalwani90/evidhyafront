import { TestBed } from '@angular/core/testing';

import { FileUploadeService } from './file-uploade.service';

describe('FileUploadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileUploadeService = TestBed.get(FileUploadeService);
    expect(service).toBeTruthy();
  });
});
