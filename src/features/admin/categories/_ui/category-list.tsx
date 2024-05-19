import { categoryRepository } from "@/entities/category/_repositories/category";
import { getAllCategoriesCase } from "@/entities/category/category.server";
import { revalidatePath } from "next/cache";
import { CategoryItem } from "./category-item";

export async function CategoriesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const categoriesList = await getAllCategoriesCase.exec();

  const handleDeleteAction = async (categoryId: string) => {
    "use server";
    await categoryRepository.deleteCategory(categoryId);
    revalidatePath(revalidatePagePath);
  };
  return (
    <>
      {categoriesList.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          onDelete={handleDeleteAction.bind(null, category.id)}
        />
      ))}
    </>
  );
}
