import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserDoc extends Document {
  username: string;
  email: string,
  password: string,
  savedArticles: string[],
  comparePassword(candidatePassword: string): Promise<boolean>;

}

const UserSchema: Schema = new Schema<UserDoc>({
  username: { 
    type: String, required: true, unique: true 
  },
  email: { 
    type: String, required: true, unique: true 
  },
  password: { 
    type: String, required: true 
  },
  savedArticles: { 
    type: [{type: String}], default: [] 
  },
});

UserSchema.pre("save", async function (this: UserDoc, next) {
  const tutor = this;

  if (!tutor.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(tutor.password, salt);
  tutor.password = hash;

  next();
});

UserSchema.methods.comparePassword = async function (
  this: UserDoc,
  candidatePassword: string
): Promise<boolean> {
  const user = this;

  const isMatch = await bcrypt.compare(candidatePassword, user.password);

  return isMatch;
};

const UserModel = mongoose.model<UserDoc>('User', UserSchema);

export default UserModel;
export { UserDoc }
