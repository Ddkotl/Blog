"use server";
import { BadRequest } from "@/shared/lib/errors";
import { fileStorage } from "@/shared/lib/file-storage";
import { z } from "zod";
import { AVATAR_FILE_KEY } from "../_constants";

const resultSchema = z.object({
  image: z.object({
    path: z.string(),
  }),
});

export const uploadImageAction = async (formData: FormData) => {
  const file = formData.get(AVATAR_FILE_KEY);

  if (!(file instanceof File)) {
    throw new BadRequest();
  }

  const storedFile = await fileStorage.uploadImage(file, "categoryImage");

  return resultSchema.parse({
    categoryImage: storedFile,
  });
};
