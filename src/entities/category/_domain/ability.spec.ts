import { SessionEntity } from "@/entities/user/user";
import { categoryAbility } from "./ability";

describe("CategoryAbility", () => {
  it("should allow creation and update of category for admin", () => {
    const adminSession: SessionEntity = {
      user: { id: "admin_id", email: "admin@example.com", role: "ADMIN" },
      expires: "2024-05-31T12:00:00Z",
    };
    const abilities = categoryAbility(adminSession);

    expect(abilities.canCreateCategory()).toBe(true);
    expect(abilities.canUpdateCategory()).toBe(true);
  });

  it("should disallow creation and update of category for non-admin", () => {
    const userSession: SessionEntity = {
      user: { id: "user_id", email: "user@example.com", role: "USER" },
      expires: "2025-05-31T12:00:00Z",
    };
    const abilities = categoryAbility(userSession);

    expect(abilities.canCreateCategory()).toBe(false);
    expect(abilities.canUpdateCategory()).toBe(false);
  });
});
