import { expect, test } from "@playwright/test";

test("create and delete novels list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("test novel");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("test description");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("test noveltest descriptionУдалить"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Удалить" }).click();
  await expect(
    page.getByText("test noveltest descriptionУдалить"),
  ).not.toBeVisible();
});
