export type CategoryId = string;

export type CategoryEntity = {
  id: CategoryId;
  name: string;
  description: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type NewCategory = {
  name: string;
  description: string;
  image?: string | null;
};

export type UpdateCategory = {
  id: CategoryId;
  name: string;
  description: string;
  image?: string | null;
};
