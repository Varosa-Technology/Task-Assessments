import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { preferedModeOfContact } from '../constants/preferedModeOfContact.enum';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ default: uuidv4, type: String })
  id: string;

  @Prop()
  fullName: string;

  @Prop()
  gender: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  nationality: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  education: string;

  @Prop()
  preferedModeOfContact: preferedModeOfContact;
}

export const UserSchema = SchemaFactory.createForClass(User);
