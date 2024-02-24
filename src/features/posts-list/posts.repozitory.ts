import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
class PostsRepository {
  getPostsList = cache(
    (): Promise<PostListElement[]> => dbClient.post.findMany(),
  );

  createPostElement = (
    command: CreatePostListElementCommand,
  ): Promise<PostListElement> => {
    return dbClient.post.create({
      data: command,
    });
  };
  deletePostElement = (command: DeletePostListElementCommand) => {
    return dbClient.post.delete({ where: { id: command.id } });
  };
}

export const postsRepository = new PostsRepository();
