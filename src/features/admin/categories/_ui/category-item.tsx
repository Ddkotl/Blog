"use client";
import { CategoryEntity, CategoryImage } from "@/entities/category/category";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { useTransition } from "react";

export function CategoryItem({
  category,
  onDelete,
}: {
  category: CategoryEntity;
  onDelete: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };
  return (
    <TableRow>
      <TableCell className="font-medium">
        <CategoryImage category={category} className="w-8 h-8" />
      </TableCell>
      <TableCell className="font-medium">{category.name}</TableCell>
      <TableCell className="font-medium hidden md:table-cell">дата</TableCell>
      <TableCell className="font-medium hidden md:table-cell">дата</TableCell>
      <TableCell>
        <div>
          <Button aria-haspopup="true" size="icon" variant="ghost">
            <Pencil className="h-4 w-4" />
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Ты абсолютно уверен?</AlertDialogTitle>
                <AlertDialogDescription>
                  Это действе необратимо. Данный элемент будет удален без
                  возможности востановления.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Отмена</AlertDialogCancel>
                <AlertDialogAction
                  disabled={isLoadingDelete}
                  onClick={handleDelete}
                >
                  Удалить
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </TableCell>
    </TableRow>
  );
}
