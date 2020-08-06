import { userActionTypes } from "./user.types.js";

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
