import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { cn } from "@/shared/ui/utils";
import { CategoryEntity } from "../_domain/type";
import { getCategoryLetters } from "../_vm/get-categoty-letters";

export const CategoryImage = ({
  category,
  className,
}: {
  category?: CategoryEntity;
  className?: string;
}) => {
  if (!category) {
    return null;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage
        src={category.image ?? ""}
        className="object-cover rounded-sm"
      />
      <AvatarFallback>{getCategoryLetters(category)}</AvatarFallback>
    </Avatar>
  );
};
