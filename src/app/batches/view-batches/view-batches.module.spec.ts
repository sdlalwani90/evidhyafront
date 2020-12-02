import { ViewBatchesModule } from './view-batches.module';

describe('ViewBatchesModule', () => {
  let viewBatchesModule: ViewBatchesModule;

  beforeEach(() => {
    viewBatchesModule = new ViewBatchesModule();
  });

  it('should create an instance', () => {
    expect(viewBatchesModule).toBeTruthy();
  });
});
