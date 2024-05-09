import { CategoryEntity, CategoryId } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";

export class GetCategoryByIdCase {
  async exec(categoryId: CategoryId): Promise<CategoryEntity> {
    return await categoryRepository.getCategoryById(categoryId);
  }
}
export const getCategoryByIdCase = new GetCategoryByIdCase();
