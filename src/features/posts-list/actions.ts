"use server";

import { revalidatePath } from "next/cache";
import { postsRepository } from "./posts.repozitory";

export const createPostAction = async (
  command: CreatePostListElementCommand,
  revalidatePagePath: string,
) => {
  await postsRepository.createPostElement(command);
  revalidatePath(revalidatePagePath);
};
