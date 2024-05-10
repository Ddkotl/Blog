export type CategoryId = string;
export type CategoryName = string;

export type CategoryEntity = {
  id: CategoryId;
  name: CategoryName;
  description: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateCategory = {
  name: CategoryName;
  description: string;
  image?: string | null;
};

export type UpdateCategory = {
  name: CategoryName;
  description: string;
  image?: string | null;
};

export type CategoryAction = {
  name: CategoryName;
  description: string;
  image?: string | null;
};
