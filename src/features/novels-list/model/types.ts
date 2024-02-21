type NovelListElement = {
  id: string;
  name: string;
  description: string;
};

type CreateNovelListElementCommand = {
  name: string;
  description: string;
};

type DeleteNovelListElementCommand = {
  id: string;
};
