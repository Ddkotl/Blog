"use client";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/ui/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCategoryAction } from "../actions";

const createCategoryFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Имя должно быть больше 3 символов" })
    .max(50, { message: "Имя должно быть меньше 50 символов" }),
  description: z
    .string()
    .min(10, { message: "Описание должно быть больше 10 символов" }),
});

export function CreateCategoryForm({
  className,
  revalidatePagePath,
}: {
  className: string;
  revalidatePagePath: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm<z.infer<typeof createCategoryFormSchema>>({
    resolver: zodResolver(createCategoryFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-2">
          <PlusCircle className="h-5 w-5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Добавить категорию
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавление категории</DialogTitle>
          <DialogDescription>Добавьте новую категорию</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startCreateTransition(async () => {
                createCategoryAction(data, revalidatePagePath);
              });
            })}
            className={cn(className, " grid gap-6 py-4 ")}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Название</FormLabel>
                  <FormControl className="col-span-3">
                    <Input placeholder="название..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Описание</FormLabel>
                  <FormControl className="col-span-3">
                    <Input placeholder="описание..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" disabled={isCreateTransition}>
                  Добавить
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
