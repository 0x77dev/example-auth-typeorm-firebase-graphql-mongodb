import { UserEntity } from "./User.entity";
import { IUser } from "./User.interface";
import { Connection, Repository } from "typeorm";
import admin from "firebase-admin";

export class User {
  public user: IUser;
  public UserEntity = UserEntity;
  private repository: Repository<UserEntity>;

  constructor(user: IUser, connection: Connection) {
    this.user = user;
    this.repository = connection.getRepository(this.UserEntity);
  }

  public async register(): Promise<true> {
    const userRecord = await admin.auth().createUser(this.user);
    // @ts-ignore
    const user = new this.UserEntity(userRecord);
    await this.repository.save(user);
    return true;
  }
}

export default User;
