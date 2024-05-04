import { revalidatePath } from "next/cache";
import { categoryRepository } from "../category.repozitory";
import { CategoryItem } from "../ui/category-item";

export async function CategoriesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const categoriesList = await categoryRepository.getAll();

  const handleDeleteAction = async (categoryId: string) => {
    "use server";
    await categoryRepository.delete({ id: categoryId });
    revalidatePath(revalidatePagePath);
  };
  return (
    <div className="flex flex-col gap-3">
      {categoriesList.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          onDelete={handleDeleteAction.bind(null, category.id)}
        />
      ))}
    </div>
  );
}
