import { CreateCategoryForm } from "@/features/category-list/pub/create-category-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Категории | YourLife-Online",
};
export default function AdminCreateCategory() {
  return (
    <>
      {" "}
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <CreateCategoryForm
          revalidatePagePath="/admin/category"
          className="max-w-[300px] mb-10"
        />
      </main>
    </>
  );
}
