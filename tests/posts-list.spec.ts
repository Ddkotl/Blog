import { expect, test } from "@playwright/test";

test("create and delete posts list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("test post");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("test description");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("test posttest descriptionУдалить"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Удалить" }).click();
  await expect(
    page.getByText("test posttest descriptionУдалить"),
  ).not.toBeVisible();
});
