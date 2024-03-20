import { getProfileLetters } from "./get-profile-letters";

describe("get profile letters", () => {
  test("should split by .", () => {
    const res = getProfileLetters({
      email: "dmitry.kotl@gmail.com",
    });
    expect(res).toEqual("DK");
  });

  test("should split by -", () => {
    const res = getProfileLetters({
      email: "dmitry.kotl@gmail.com",
      name: "Dmitry-Kot",
    });
    expect(res).toEqual("DK");
  });

  test("should split by _", () => {
    const res = getProfileLetters({
      email: "dmitry.kotl@gmail.com",
      name: "Dmitry_Kot",
    });
    expect(res).toEqual("DK");
  });

  test("should split by space", () => {
    const res = getProfileLetters({
      email: "dmitry.kotl@gmail.com",
      name: "Dmitry Kot",
    });
    expect(res).toEqual("DK");
  });

  test("should return first 2 letters if no separator", () => {
    const res = getProfileLetters({
      email: "dmitry.kotl@gmail.com",
      name: "DmitryKot",
    });
    expect(res).toEqual("DM");
  });

  test("should return first 2 letters if no separator email", () => {
    const res = getProfileLetters({
      email: "dmitrykotl@gmail.com",
    });
    expect(res).toEqual("DM");
  });

  test("should return email if empty username", () => {
    const res = getProfileLetters({
      email: "dmitrykotl@gmail.com",
      name: "",
    });
    expect(res).toEqual("DM");
  });

  test("should work with short name", () => {
    const res = getProfileLetters({
      email: "dmitrykotl@gmail.com",
      name: "D",
    });
    expect(res).toEqual("D");
  });
});
