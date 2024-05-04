"use server";

import { revalidatePath } from "next/cache";
import { categoryRepository } from "./category.repozitory";

export const createCategoryAction = async (
  command: CreateCategoryListElementCommand,
  revalidatePagePath: string,
) => {
  await categoryRepository.create(command);
  revalidatePath(revalidatePagePath);
};
