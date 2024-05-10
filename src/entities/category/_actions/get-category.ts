"use server";

import { z } from "zod";
import { categorySchema } from "../_domain/schema";
import { getCategoryByIdCase } from "../category.server";

const propsSchema = z.object({
  categoryId: z.string(),
});

const resultSchema = z.object({
  category: categorySchema,
});

export const getCategoryAction = async (props: z.infer<typeof propsSchema>) => {
  const { categoryId } = propsSchema.parse(props);

  const category = await getCategoryByIdCase.exec(categoryId);

  return resultSchema.parseAsync({
    category: category,
  });
};
