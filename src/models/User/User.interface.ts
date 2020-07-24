import { auth } from "firebase-admin";

export interface IUser extends auth.UserRecord {
  /**
   * The user's primary email.
   */
  email: string;
}
