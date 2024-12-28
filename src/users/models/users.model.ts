import { Document } from 'mongoose';

export interface User extends Document {
  //document é uma estrutra do mongoose
  name: string;
  email: string;
  password: string;
}
