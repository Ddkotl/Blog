import { SessionEntity } from "@/entities/user/user";
import { AuthorizationError } from "@/shared/lib/errors";
import { CategoryId } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";
import { DeleteCategoryUseCase } from "./delete-category";

jest.mock("../_repositories/category", () => ({
  categoryRepository: {
    deleteCategory: jest.fn(),
  },
}));

describe("DeleteCategoryUseCase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete category if user has delete permission", async () => {
    const categoryId: CategoryId = "1";
    const session: SessionEntity = {
      user: { id: "user1", email: "user@example.com", role: "ADMIN" },
      expires: "2024-05-31T12:00:00Z",
    };

    const deleteCategoryUseCase = new DeleteCategoryUseCase();
    await deleteCategoryUseCase.exec({ categoryId, session });

    expect(categoryRepository.deleteCategory).toHaveBeenCalledWith(categoryId);
  });

  it("should throw AuthorizationError if user does not have delete permission", async () => {
    const categoryId: CategoryId = "1";
    const session: SessionEntity = {
      user: { id: "user1", email: "user@example.com", role: "USER" },
      expires: "2024-05-31T12:00:00Z",
    };

    const deleteCategoryUseCase = new DeleteCategoryUseCase();
    await expect(
      deleteCategoryUseCase.exec({ categoryId, session }),
    ).rejects.toThrow(AuthorizationError);

    expect(categoryRepository.deleteCategory).not.toHaveBeenCalled();
  });
});
