import { getCategoryLetters } from "./get-categoty-letters";

describe("getCategoryLetters", () => {
  it("should return initials for a single word category name", () => {
    const categoryName = "Apple";
    const result = getCategoryLetters(categoryName);
    expect(result).toBe("AP");
  });

  it("should return initials for a multi-word category name", () => {
    const categoryName = "Health and Fitness";
    const result = getCategoryLetters(categoryName);
    expect(result).toBe("HA");
  });

  it("should return initials for a category name with special characters", () => {
    const categoryName = "Web Development - JavaScript";
    const result = getCategoryLetters(categoryName);
    expect(result).toBe("WD");
  });

  it("should return empty string for an empty category name", () => {
    const categoryName = "";
    const result = getCategoryLetters(categoryName);
    expect(result).toBe("");
  });

  it("should return initials for a category name with a single character", () => {
    const categoryName = "A";
    const result = getCategoryLetters(categoryName);
    expect(result).toBe("A");
  });

  it("should return initials for a category name with two characters", () => {
    const categoryName = "AB";
    const result = getCategoryLetters(categoryName);
    expect(result).toBe("AB");
  });

  it("should return initials for a category name with multiple characters separated by underscore", () => {
    const categoryName = "data_science";
    const result = getCategoryLetters(categoryName);
    expect(result).toBe("DS");
  });
});
