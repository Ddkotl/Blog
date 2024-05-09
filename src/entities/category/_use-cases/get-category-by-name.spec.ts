import { CategoryEntity, CategoryName } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";
import { GetCategoryByIdCase } from "./get-category-by-id";

jest.mock("../_repositories/category", () => ({
  categoryRepository: {
    getCategoryById: jest.fn(),
  },
}));

describe("GetCategoryByIdCase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a category by id", async () => {
    const getCategoryByIdCase = new GetCategoryByIdCase();
    const categoryName: CategoryName = "Category";
    const category: CategoryEntity = {
      id: "1",
      name: "Category",
      description: "Description",
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    (categoryRepository.getCategoryById as jest.Mock).mockResolvedValueOnce(
      category,
    );

    const result = await getCategoryByIdCase.exec(categoryName);

    expect(result).toEqual(category);
    expect(categoryRepository.getCategoryById).toHaveBeenCalledWith(
      categoryName,
    );
  });
});
