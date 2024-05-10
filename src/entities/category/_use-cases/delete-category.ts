import { SessionEntity } from "@/entities/user/user";
import { AuthorizationError } from "@/shared/lib/errors";
import { categoryAbility } from "../_domain/ability";
import { CategoryId } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";

export class DeleteCategoryUseCase {
  async exec({
    categoryId,
    session,
  }: {
    categoryId: CategoryId;
    session: SessionEntity;
  }) {
    const ability = categoryAbility(session);

    if (!ability.canDeleteCategory()) {
      throw new AuthorizationError();
    }
    return await categoryRepository.deleteCategory(categoryId);
  }
}
export const deleteCategoryUseCase = new DeleteCategoryUseCase();
