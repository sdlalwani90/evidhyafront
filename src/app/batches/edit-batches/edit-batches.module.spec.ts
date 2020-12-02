import { EditBatchesModule } from './edit-batches.module';

describe('EditBatchesModule', () => {
  let editBatchesModule: EditBatchesModule;

  beforeEach(() => {
    editBatchesModule = new EditBatchesModule();
  });

  it('should create an instance', () => {
    expect(editBatchesModule).toBeTruthy();
  });
});
