import { dbClient } from "@/shared/lib/db";
import {
  CategoryEntity,
  CategoryId,
  CreateCategory,
  UpdateCategory,
} from "../_domain/type";

export class CategoryRepository {
  async getAllCategory(): Promise<CategoryEntity[]> {
    try {
      return await dbClient.category.findMany();
    } catch (error) {
      console.error("Ошибка при поиске категорий:", error);
      throw error;
    }
  }
  async getCategoryById(categoryId: CategoryId): Promise<CategoryEntity> {
    try {
      return await dbClient.category.findUniqueOrThrow({
        where: { id: categoryId },
      });
    } catch (error) {
      console.error("Ошибка при поиске категории:", error);
      throw error;
    }
  }

  async getCategoryByName(name: string): Promise<CategoryEntity> {
    try {
      return await dbClient.category.findUniqueOrThrow({ where: { name } });
    } catch (error) {
      console.error("Ошибка при поиске категории:", error);
      throw error;
    }
  }

  async createCategory(category: CreateCategory): Promise<CategoryEntity> {
    try {
      const isCategoryExist = await this.getCategoryByName(category.name);
      if (!isCategoryExist) {
        return await dbClient.category.create({ data: category });
      } else {
        throw new Error("Такая категория уже есть");
      }
    } catch (error) {
      console.error("Ошибка при создании категории:", error);
      throw error;
    }
  }

  async updateCategory(
    categoryId: CategoryId,
    data: UpdateCategory,
  ): Promise<CategoryEntity> {
    try {
      return await dbClient.category.update({
        where: { id: categoryId },
        data,
      });
    } catch (error) {
      console.error("Ошибка при обновлении категории:", error);
      throw error;
    }
  }
}

export const categoryRepository = new CategoryRepository();
