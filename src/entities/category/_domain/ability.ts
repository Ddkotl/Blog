import { ROLES, SessionEntity, UserId } from "@/entities/user/user";

export const createCategoryAbility = (session: SessionEntity) => ({
  canCreateCategory: (userId: UserId) =>
    session.user.id === userId || session.user.role === ROLES.ADMIN,
});
export const updateCategoryAbility = (session: SessionEntity) => ({
  canUpdateCategory: (userId: UserId) =>
    session.user.id === userId || session.user.role === ROLES.ADMIN,
});
