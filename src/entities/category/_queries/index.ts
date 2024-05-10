import { useQueryClient } from "@tanstack/react-query";
import { getCategoryAction } from "../_actions/get-category";
import { CategoryId } from "../_domain/type";

const baseKey = "category";

export const getCategoryQuery = (categoryId: CategoryId) => ({
  queryKey: [baseKey, "getCategoryById", categoryId],
  queryFn: () => getCategoryAction({ categoryId }),
});

export const useInvalidateCategory = () => {
  const queryClient = useQueryClient();

  return (categoryId: CategoryId) =>
    queryClient.invalidateQueries({
      queryKey: [baseKey, "getCategoryById", categoryId],
    });
};
