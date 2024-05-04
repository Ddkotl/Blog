import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
class CategoryRepository {
  getAll = cache(
    (): Promise<CategoryListElement[]> => dbClient.category.findMany(),
  );

  create = (
    command: CreateCategoryListElementCommand,
  ): Promise<CategoryListElement> => {
    return dbClient.category.create({
      data: command,
    });
  };
  update = (
    command: EditCategoryListElementCommand,
  ): Promise<CategoryListElement> => {
    return dbClient.category.update({
      where: { id: command.id },
      data: command,
    });
  };
  delete = (command: DeleteCategoryListElementCommand) => {
    return dbClient.category.delete({ where: { id: command.id } });
  };
}

export const categoryRepository = new CategoryRepository();
