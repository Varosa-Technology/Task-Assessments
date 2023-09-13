import { ObjectType, Field, ID } from '@nestjs/graphql';
import { preferedModeOfContact } from '../constants/preferedModeOfContact.enum';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  fullName: string;

  @Field()
  gender: string;

  @Field()
  phoneNumber: string;

  @Field()
  email: string;

  @Field()
  address: string;

  @Field()
  nationality: string;

  @Field()
  dateOfBirth: Date;

  @Field()
  education: string;

  @Field()
  preferedModeOfContact: preferedModeOfContact;
}
