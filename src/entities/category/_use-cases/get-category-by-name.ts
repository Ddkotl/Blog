import { CategoryEntity, CategoryName } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";

export class GetCategoryByNameCase {
  async exec(categoryName: CategoryName): Promise<CategoryEntity> {
    return await categoryRepository.getCategoryByName(categoryName);
  }
}
export const getCategoryByNameCase = new GetCategoryByNameCase();
