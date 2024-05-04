type CategoryListElement = {
  id: string;
  name: string;
};

type CreateCategoryListElementCommand = {
  name: string;
};
type EditCategoryListElementCommand = {
  id: string;
  name: string;
};

type DeleteCategoryListElementCommand = {
  id: string;
};
