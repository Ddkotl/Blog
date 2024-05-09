import { SessionEntity } from "@/entities/user/user";
import { AuthorizationError } from "@/shared/lib/errors";
import { CreateCategory } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";
import { CreateCategoryUseCase } from "./create-category";

jest.mock("../_repositories/category", () => ({
  categoryRepository: {
    createCategory: jest.fn(),
  },
}));

describe("CreateCategoryUseCase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new category when user has permission", async () => {
    const createCategoryUseCase = new CreateCategoryUseCase();
    const data: CreateCategory = {
      name: "Test Category",
      description: "Test Description",
      image: null,
    };
    const session: SessionEntity = {
      user: {
        id: "user_id",
        email: "user@example.com",
        role: "ADMIN",
        name: "John",
        image: null,
      },
      expires: "2024-05-31T12:00:00Z",
    };
    (categoryRepository.createCategory as jest.Mock).mockResolvedValueOnce({
      ...data,
      id: "1",
    });

    const result = await createCategoryUseCase.exec({ data, session });

    expect(result).toEqual({ ...data, id: "1" });
    expect(categoryRepository.createCategory).toHaveBeenCalledWith(data);
  });

  it("should throw AuthorizationError when user does not have permission", async () => {
    const createCategoryUseCase = new CreateCategoryUseCase();
    const data: CreateCategory = {
      name: "Test Category",
      description: "Test Description",
      image: null,
    };
    const session: SessionEntity = {
      user: {
        id: "user_id",
        email: "user@example.com",
        role: "USER",
        name: "Jane",
        image: null,
      },
      expires: "2024-05-31T12:00:00Z",
    };
    (categoryRepository.createCategory as jest.Mock).mockResolvedValueOnce({});

    await expect(createCategoryUseCase.exec({ data, session })).rejects.toThrow(
      AuthorizationError,
    );
    expect(categoryRepository.createCategory).not.toHaveBeenCalled();
  });
});
