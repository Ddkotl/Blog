import { ROLES, SessionEntity } from "@/entities/user/user";

type CategoryAbilities = {
  canCreateCategory: () => boolean;
  canUpdateCategory: () => boolean;
  canDeleteCategory: () => boolean;
};

export const categoryAbility = (session: SessionEntity): CategoryAbilities => ({
  canCreateCategory: () => session.user.role === ROLES.ADMIN,
  canUpdateCategory: () => session.user.role === ROLES.ADMIN,
  canDeleteCategory: () => session.user.role === ROLES.ADMIN,
});
