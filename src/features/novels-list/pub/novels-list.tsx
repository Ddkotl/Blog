import { revalidatePath } from "next/cache";
import { novelsRepository } from "../novels.repozitory";
import { NovelItem } from "../ui/novel-item";

export async function NovelsList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const novelsList = await novelsRepository.getNovelsList();

  const handleDeleteAction = async (novelId: string) => {
    "use server";
    await novelsRepository.deleteNovelElement({ id: novelId });
    revalidatePath(revalidatePagePath);
  };
  return (
    <div className="flex flex-col gap-3">
      {novelsList.map((novel) => (
        <NovelItem
          key={novel.id}
          novel={novel}
          onDelete={handleDeleteAction.bind(null, novel.id)}
        />
      ))}
    </div>
  );
}
