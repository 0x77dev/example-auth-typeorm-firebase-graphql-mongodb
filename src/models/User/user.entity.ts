import { Entity, ObjectIdColumn, Column } from "typeorm";
import { IUser } from "./User.interface";

@Entity()
export class UserEntity {
  /**
   * The user's `uid`.
   */
  @ObjectIdColumn()
  uid: string;

  /**
   * The user's primary email.
   */
  @Column()
  email: string;

  /**
   * Whether or not the user's primary email is verified.
   */
  @Column()
  emailVerified: boolean;

  /**
   * The user's display name.
   */
  @Column()
  displayName?: string;

  /**
   * The user's primary phone number, if set.
   */
  @Column()
  phoneNumber?: string;

  /**
   * The user's photo URL.
   */
  @Column()
  photoURL?: string;

  /**
   * Whether or not the user is disabled: `true` for disabled; `false` for
   * enabled.
   */
  @Column()
  disabled: boolean;

  constructor(user: IUser) {
    this.uid = user.uid;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.displayName = user.displayName;
    this.phoneNumber = user.phoneNumber;
    this.photoURL = user.photoURL;
    this.disabled = user.disabled;
  }
}
