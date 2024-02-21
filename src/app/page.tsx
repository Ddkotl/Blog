import { CreateNovelForm } from "@/features/novels-list/pub/create-novel-form";
import { NovelsList } from "@/features/novels-list/pub/novels-list";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <CreateNovelForm revalidatePagePath="/" className="max-w-[300px] mb-10" />
      <NovelsList revalidatePagePath="/" />
    </main>
  );
}
