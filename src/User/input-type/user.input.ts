import { Field, InputType } from '@nestjs/graphql';
import { preferedModeOfContact } from '../constants/preferedModeOfContact.enum';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class UserInput {
  id: string;

  @IsNotEmpty()
  @MaxLength(20)
  @Field()
  fullName: string;

  @IsNotEmpty()
  @MaxLength(10)
  @Field()
  gender: string;

  @IsNotEmpty()
  @IsNumberString()
  @MinLength(10)
  @MaxLength(14)
  @Field()
  phoneNumber: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(30)
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  @MaxLength(30)
  address: string;

  @IsNotEmpty()
  @Field()
  @MaxLength(10)
  nationality: string;

  @IsNotEmpty()
  @IsDate()
  @Field()
  dateOfBirth: Date;

  @IsNotEmpty()
  @Field()
  @MaxLength(20)
  education: string;

  @IsNotEmpty()
  @Field()
  preferedModeOfContact: preferedModeOfContact;
}
