import { revalidatePath } from "next/cache";
import { postsRepository } from "../posts.repozitory";
import { PostItem } from "../ui/post-item";

export async function PostsList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const postsList = await postsRepository.getPostsList();

  const handleDeleteAction = async (postId: string) => {
    "use server";
    await postsRepository.deletePostElement({ id: postId });
    revalidatePath(revalidatePagePath);
  };
  return (
    <div className="flex flex-col gap-3">
      {postsList.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={handleDeleteAction.bind(null, post.id)}
        />
      ))}
    </div>
  );
}
