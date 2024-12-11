import { Realm } from "@realm/react";

export class User extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  createdAt!: Date;

  static generate(name: string, email: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      email,
      createdAt: new Date(),
    };
  }

  static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      email: "string",
      createdAt: "date",
    },
  };
}
