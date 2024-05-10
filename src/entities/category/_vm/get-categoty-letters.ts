import { CategoryName } from "../_domain/type";

export const getCategoryLetters = (categoryName: CategoryName) => {
  const displayName = categoryName;

  const [a, b] = displayName.split("@")[0].split(/\.|\s|-|_/);

  if (!b) {
    return `${a[0]?.toUpperCase() ?? ""}${a[1]?.toUpperCase() ?? ""}`;
  }

  return `${a[0]?.toUpperCase() ?? ""}${b[0]?.toUpperCase() ?? ""}`;
};
