import { z } from "zod";

export const categorySchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().nullable().optional(),
});

export const categoryFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Название категории должно быть не менее 3 симвалов.",
    })
    .max(30, {
      message: "Название категории должно быть не более 30 символов",
    })
    .transform((name) => name.trim()),
  description: z
    .string()
    .min(10, {
      message: "Описание категории должно быть не менее 10 симвалов.",
    })
    .max(300, {
      message: "Описание категории должно быть не более 300 символов",
    })
    .transform((name) => name.trim()),
  image: z.string().optional(),
});
