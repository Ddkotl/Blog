"use server";

import { revalidatePath } from "next/cache";
import { novelsRepository } from "./novels.repozitory";

export const createNovelAction = async (
  command: CreateNovelListElementCommand,
  revalidatePagePath: string,
) => {
  await novelsRepository.createNovelElement(command);
  revalidatePath(revalidatePagePath);
};
