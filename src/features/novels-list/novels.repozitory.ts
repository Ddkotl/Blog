import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
class NovelsRepository {
  getNovelsList = cache(
    (): Promise<NovelListElement[]> => dbClient.novel.findMany(),
  );

  createNovelElement = (
    command: CreateNovelListElementCommand,
  ): Promise<NovelListElement> => {
    return dbClient.novel.create({
      data: command,
    });
  };
  deleteNovelElement = (command: DeleteNovelListElementCommand) => {
    return dbClient.novel.delete({ where: { id: command.id } });
  };
}

export const novelsRepository = new NovelsRepository();
