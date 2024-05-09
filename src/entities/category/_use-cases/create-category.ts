import { SessionEntity } from "@/entities/user/user";
import { AuthorizationError } from "@/shared/lib/errors";
import { categoryAbility } from "../_domain/ability";
import { CategoryEntity, CreateCategory } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";

export class CreateCategoryUseCase {
  async exec({
    data,
    session,
  }: {
    data: CreateCategory;
    session: SessionEntity;
  }): Promise<CategoryEntity> {
    const ability = categoryAbility(session);

    if (!ability.canCreateCategory()) {
      throw new AuthorizationError();
    }
    return await categoryRepository.createCategory(data);
  }
}

export const createCategoryUseCase = new CreateCategoryUseCase();
