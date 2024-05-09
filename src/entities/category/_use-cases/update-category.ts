import { SessionEntity } from "@/entities/user/user";
import { AuthorizationError } from "@/shared/lib/errors";
import { categoryAbility } from "../_domain/ability";
import { CategoryEntity, CategoryId, UpdateCategory } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";

export class UpdateCategoryUseCase {
  async exec({
    categoryId,
    data,
    session,
  }: {
    categoryId: CategoryId;
    data: UpdateCategory;
    session: SessionEntity;
  }): Promise<CategoryEntity> {
    const ability = categoryAbility(session);

    if (!ability.canUpdateCategory()) {
      throw new AuthorizationError();
    }
    return await categoryRepository.updateCategory(categoryId, data);
  }
}

export const updateCategoryUseCase = new UpdateCategoryUseCase();
