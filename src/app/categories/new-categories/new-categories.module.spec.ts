import { NewCategoriesModule } from './new-categories.module';

describe('NewCategoriesModule', () => {
  let newCategoriesModule: NewCategoriesModule;

  beforeEach(() => {
    newCategoriesModule = new NewCategoriesModule();
  });

  it('should create an instance', () => {
    expect(newCategoriesModule).toBeTruthy();
  });
});
