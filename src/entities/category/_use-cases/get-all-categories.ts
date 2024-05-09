import { CategoryEntity } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";

export class GetAllCategoriesCase {
  async exec(): Promise<CategoryEntity[]> {
    return await categoryRepository.getAllCategory();
  }
}
export const getAllCategoriesCase = new GetAllCategoriesCase();
