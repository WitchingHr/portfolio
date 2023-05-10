import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface IUser {
  username: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User as mongoose.Model<IUser>;
