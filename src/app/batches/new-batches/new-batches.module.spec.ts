import { NewBatchesModule } from './new-batches.module';

describe('NewBatchesModule', () => {
  let newBatchesModule: NewBatchesModule;

  beforeEach(() => {
    newBatchesModule = new NewBatchesModule();
  });

  it('should create an instance', () => {
    expect(newBatchesModule).toBeTruthy();
  });
});
