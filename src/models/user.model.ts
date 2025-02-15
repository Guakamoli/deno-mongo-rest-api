import { db } from "@/utils/connectDB.ts";
import { ObjectId } from "mongodb";

interface UserSchema {
  _id?: ObjectId;
  name: string;
  email: string;
  role: string;
  verified: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const User = db.collection<UserSchema>("users");
