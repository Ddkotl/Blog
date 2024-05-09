import { SessionEntity } from "@/entities/user/user";
import { AuthorizationError } from "@/shared/lib/errors";
import { CategoryId, UpdateCategory } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";
import { UpdateCategoryUseCase } from "./update-category";

jest.mock("../_repositories/category", () => ({
  categoryRepository: {
    updateCategory: jest.fn(),
  },
}));

describe("UpdateCategoryUseCase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update a category when user has permission", async () => {
    const updateCategoryUseCase = new UpdateCategoryUseCase();
    const categoryId: CategoryId = "category_id";
    const data: UpdateCategory = {
      name: "Updated Category",
      description: "Updated Description",
      image: null,
    };
    const session: SessionEntity = {
      user: { id: "user_id", email: "user@example.com", role: "ADMIN" },
      expires: "2024-05-31T12:00:00Z",
    };
    (categoryRepository.updateCategory as jest.Mock).mockResolvedValueOnce({
      ...data,
      id: categoryId,
    });

    const result = await updateCategoryUseCase.exec({
      categoryId,
      data,
      session,
    });

    expect(result).toEqual({ ...data, id: categoryId });
    expect(categoryRepository.updateCategory).toHaveBeenCalledWith(
      categoryId,
      data,
    );
  });

  it("should throw AuthorizationError when user does not have permission", async () => {
    const updateCategoryUseCase = new UpdateCategoryUseCase();
    const categoryId: CategoryId = "category_id";
    const data: UpdateCategory = {
      name: "Updated Category",
      description: "Updated Description",
      image: null,
    };
    const session: SessionEntity = {
      user: { id: "user_id", email: "user@example.com", role: "USER" },
      expires: "2024-05-31T12:00:00Z",
    };
    (categoryRepository.updateCategory as jest.Mock).mockResolvedValueOnce({});

    await expect(
      updateCategoryUseCase.exec({ categoryId, data, session }),
    ).rejects.toThrow(AuthorizationError);
    expect(categoryRepository.updateCategory).not.toHaveBeenCalled();
  });
});
