import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "создание категории | YourLife-Online",
};
export default function AdminCreateCategory() {
  return (
    <>
      {" "}
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-4">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Создание категории</CardTitle>
            <CardDescription>
              Чтобы создать катеорию заполните форму
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <CreateCategoryForm /> */}
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">назад</div>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
