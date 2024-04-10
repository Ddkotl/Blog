import { CreatePostForm } from "@/features/posts-list/pub/create-post-form";
import { PostsList } from "@/features/posts-list/pub/posts-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Редактирование статей | YourLife-Online",
};
export default function AdminPost() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-8 mx-8 justify-center items-center">
        <div>admin post</div>
        <CreatePostForm
          revalidatePagePath="/"
          className="max-w-[300px] mb-10"
        />
        <PostsList revalidatePagePath="/" />{" "}
      </main>
    </>
  );
}
