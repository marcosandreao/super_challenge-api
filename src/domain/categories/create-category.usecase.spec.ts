import { CategoryRepo } from 'src/infra/categories/category.repo';
import { CategoryEntity } from 'src/infra/categories/entities/category.entity';
import { CreateCategoryUseCase } from './create-category.usecase';

describe('CatsController', () => {
  let useCase: CreateCategoryUseCase;
  let repo: any;

  beforeEach(() => {
    repo = jest.mock<CategoryRepo>("category")
    useCase = new CreateCategoryUseCase(repo);
  });

  describe('create', () => {
    it('should return a CatEntity', async () => {
      const result = new CategoryEntity();
      result.name = 'abc';

      jest.spyOn(repo, 'save').mockImplementation(() => result);
      
      expect(repo.save).toHaveBeenCalledWith(() => result);
      expect(await useCase.execute("abc")).toBe(result);
    });
  });
});