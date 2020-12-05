import { EditCategoriesModule } from './edit-categories.module';

describe('EditCategoriesModule', () => {
  let editCategoriesModule: EditCategoriesModule;

  beforeEach(() => {
    editCategoriesModule = new EditCategoriesModule();
  });

  it('should create an instance', () => {
    expect(editCategoriesModule).toBeTruthy();
  });
});
