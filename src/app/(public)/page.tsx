import { CreatePostForm } from "@/features/posts-list/pub/create-post-form";
import { PostsList } from "@/features/posts-list/pub/posts-list";
import { Slider } from "@/widgets/slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | YourLife-Online",
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 mx-8 justify-center items-center">
      <h1>Новые статьи</h1>
      <Slider />
      <CreatePostForm revalidatePagePath="/" className="max-w-[300px] mb-10" />
      <PostsList revalidatePagePath="/" />
    </main>
  );
}
