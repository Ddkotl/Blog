import { CreatePostForm } from "@/features/posts-list/pub/create-post-form";
import { PostsList } from "@/features/posts-list/pub/posts-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1>Posts</h1>
      <CreatePostForm revalidatePagePath="/" className="max-w-[300px] mb-10" />
      <PostsList revalidatePagePath="/" />
    </main>
  );
}
