import { dbClient } from "@/shared/lib/db";
import {
  CategoryEntity,
  CategoryId,
  CreateCategory,
  UpdateCategory,
} from "../_domain/type";
import { CategoryRepository } from "./category";

// Создание заглушек для методов dbClient
jest.mock("@/shared/lib/db", () => ({
  dbClient: {
    category: {
      findMany: jest.fn(),
      findUniqueOrThrow: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe("CategoryRepository", () => {
  let categoryRepository: CategoryRepository;

  beforeEach(() => {
    categoryRepository = new CategoryRepository();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Очистка вызовов моков после каждого теста
  });

  it("getAllCategory should return an array of categories", async () => {
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
    (dbClient.category.findMany as jest.Mock).mockResolvedValueOnce(categories);

    const result = await categoryRepository.getAllCategory();

    expect(result).toEqual(categories);
    expect(dbClient.category.findMany).toHaveBeenCalledTimes(1);
  });

  it("getCategoryById should return a category by id", async () => {
    const categoryId: CategoryId = "1";
    const category: CategoryEntity = {
      id: categoryId,
      name: "Category 1",
      description: "Description 1",
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    (dbClient.category.findUniqueOrThrow as jest.Mock).mockResolvedValueOnce(
      category,
    );

    const result = await categoryRepository.getCategoryById(categoryId);

    expect(result).toEqual(category);
    expect(dbClient.category.findUniqueOrThrow).toHaveBeenCalledTimes(1);
    expect(dbClient.category.findUniqueOrThrow).toHaveBeenCalledWith({
      where: { id: categoryId },
    });
  });

  it("getCategoryByName should return a category by name", async () => {
    const categoryName: string = "Category 1";
    const category: CategoryEntity = {
      id: "1",
      name: categoryName,
      description: "Description 1",
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    (dbClient.category.findUniqueOrThrow as jest.Mock).mockResolvedValueOnce(
      category,
    );

    const result = await categoryRepository.getCategoryByName(categoryName);

    expect(result).toEqual(category);
    expect(dbClient.category.findUniqueOrThrow).toHaveBeenCalledTimes(1);
    expect(dbClient.category.findUniqueOrThrow).toHaveBeenCalledWith({
      where: { name: categoryName },
    });
  });

  it("createCategory should create a new category", async () => {
    const newCategory: CreateCategory = {
      name: "New Category",
      description: "Description",
      image: null,
    };
    const createdCategory: CategoryEntity = {
      id: "1",
      ...newCategory,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    (dbClient.category.findUniqueOrThrow as jest.Mock).mockResolvedValueOnce(
      undefined,
    ); // Категория не существует
    (dbClient.category.create as jest.Mock).mockResolvedValueOnce(
      createdCategory,
    );

    const result = await categoryRepository.createCategory(newCategory);

    expect(result).toEqual(createdCategory);
    expect(dbClient.category.findUniqueOrThrow).toHaveBeenCalledTimes(1);
    expect(dbClient.category.create).toHaveBeenCalledTimes(1);
    expect(dbClient.category.create).toHaveBeenCalledWith({
      data: newCategory,
    });
  });

  it("updateCategory should update an existing category", async () => {
    const categoryId: CategoryId = "1";
    const updateData: UpdateCategory = {
      name: "Updated Category",
      description: "Updated Description",
      image: "updated_image.jpg",
    };
    const updatedCategory: CategoryEntity = {
      id: categoryId,
      ...updateData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    (dbClient.category.update as jest.Mock).mockResolvedValueOnce(
      updatedCategory,
    );

    const result = await categoryRepository.updateCategory(
      categoryId,
      updateData,
    );

    expect(result).toEqual(updatedCategory);
    expect(dbClient.category.update).toHaveBeenCalledTimes(1);
    expect(dbClient.category.update).toHaveBeenCalledWith({
      where: { id: categoryId },
      data: updateData,
    });
  });
  it("deleteCategory should delete an existing category", async () => {
    const categoryId: CategoryId = "1";
    (dbClient.category.delete as jest.Mock).mockResolvedValueOnce({
      id: categoryId,
    });

    const categoryRepository = new CategoryRepository();
    const result = await categoryRepository.deleteCategory(categoryId);

    expect(result).toEqual({ id: categoryId });
    expect(dbClient.category.delete).toHaveBeenCalledWith({
      where: { id: categoryId },
    });
  });
});
