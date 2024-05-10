import { SessionEntity } from "@/entities/user/user";
import { categoryAbility } from "./ability";

describe("categoryAbility", () => {
  it("should allow creating, updating, and deleting categories for admin users", () => {
    const session: SessionEntity = {
      user: {
        id: "1",
        email: "admin@example.com",
        role: "ADMIN",
        name: "Admin",
        image: null,
      },
      expires: "2024-05-31T12:00:00Z",
    };

    const abilities = categoryAbility(session);

    expect(abilities.canCreateCategory()).toBe(true);
    expect(abilities.canUpdateCategory()).toBe(true);
    expect(abilities.canDeleteCategory()).toBe(true);
  });

  it("should disallow creating, updating, and deleting categories for non-admin users", () => {
    const session: SessionEntity = {
      user: {
        id: "2",
        email: "user@example.com",
        role: "USER",
        name: "User",
        image: null,
      },
      expires: "2024-05-31T12:00:00Z",
    };

    const abilities = categoryAbility(session);

    expect(abilities.canCreateCategory()).toBe(false);
    expect(abilities.canUpdateCategory()).toBe(false);
    expect(abilities.canDeleteCategory()).toBe(false);
  });
});
