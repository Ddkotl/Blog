import { CategoryEntity } from "../_domain/type";
import { categoryRepository } from "../_repositories/category";
import { GetAllCategoriesCase } from "./get-all-categories";

jest.mock("../_repositories/category", () => ({
  categoryRepository: {
    getAllCategory: jest.fn(),
  },
}));

describe("GetAllCategoriesCase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return all categories", async () => {
    const getAllCategoriesCase = new GetAllCategoriesCase();
    const categories: CategoryEntity[] = [
      {
        id: "1",
        name: "Category 1",
        description: "Description 1",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Category 2",
        description: "Description 2",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    (categoryRepository.getAllCategory as jest.Mock).mockResolvedValueOnce(
      categories,
    );

    const result = await getAllCategoriesCase.exec();

    expect(result).toEqual(categories);
    expect(categoryRepository.getAllCategory).toHaveBeenCalled();
  });
});
