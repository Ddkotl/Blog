import { $Enums } from "@prisma/client";

export const ADMIN = {
  id: "admin",
  email: "admin@gmail.com",
  name: "ADMIN",
  testPassword: "1234",
  role: $Enums.ROLE.ADMIN,
};

export const USER = {
  id: "user",
  email: "user@gmail.com",
  name: "USER1",
  testPassword: "1234",
  role: $Enums.ROLE.USER,
};

export const USER_2 = {
  id: "user-2",
  email: "user2@gmail.com",
  name: "USER2",
  testPassword: "1234",
  role: $Enums.ROLE.USER,
};
