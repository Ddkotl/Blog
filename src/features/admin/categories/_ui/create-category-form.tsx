"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { categoryFormSchema } from "@/entities/category/category";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useRouter } from "next/navigation";
import { createCategoryAction } from "../_actions/create-category";
import { ImageField } from "./image-field";

type CategoryFormValues = z.infer<typeof categoryFormSchema>;

export function CreateCategoryForm({
  onSuccess,
  submitText = "Сохранить",
  revalidatePagePath,
  callbackUrl,
}: {
  onSuccess?: () => void;
  submitText?: string;
  revalidatePagePath: string;
  callbackUrl?: string;
}) {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
  });
  const router = useRouter();
  const handleSuccess = () => {
    if (callbackUrl) {
      router.push(callbackUrl);
    }
  };
  const handleSubmit = form.handleSubmit(async (data) => {
    await createCategoryAction(
      {
        data: data,
      },
      revalidatePagePath,
    );
    onSuccess: {
      handleSuccess;
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название категории</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Картинка</FormLabel>
              <FormControl>
                <ImageField value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{submitText}</Button>
      </form>
    </Form>
  );
}
