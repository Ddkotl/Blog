type PostListElement = {
  id: string;
  name: string;
  description: string;
};

type CreatePostListElementCommand = {
  name: string;
  description: string;
};

type DeletePostListElementCommand = {
  id: string;
};
