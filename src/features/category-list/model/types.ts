type CategoryListElement = {
  id: string;
  name: string;
  description: string;
};

type CreateCategoryListElementCommand = {
  name: string;
  description: string;
};
type EditCategoryListElementCommand = {
  id: string;
  name: string;
  description: string;
};

type DeleteCategoryListElementCommand = {
  id: string;
};
