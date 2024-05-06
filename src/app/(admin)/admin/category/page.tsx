import { CategoriesList } from "@/features/category-list/pub/category-list";
import { CreateCategoryForm } from "@/features/category-list/pub/create-category-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Категории | YourLife-Online",
};
export default function AdminCategory() {
  return (
    <>
      {" "}
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-4">
        <div className="ml-auto flex items-center ">
          <CreateCategoryForm
            className="max-w-[425px] "
            revalidatePagePath="/admin/category"
          />
        </div>

        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Категории</CardTitle>
            <CardDescription>Список категоий на сайте</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Картинка</TableHead>
                  <TableHead>Название</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Дата создания
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Дата обновления
                  </TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <CategoriesList revalidatePagePath="/admin/category" />
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
