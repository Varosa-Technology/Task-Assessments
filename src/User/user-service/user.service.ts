import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../database/user.schema';
import { Model } from 'mongoose';
import { UserInput } from '../input-type/user.input';
import { UserUpdateInput } from '../input-type/userUpdate.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModle: Model<UserDocument>) {}

  async createUser(createUserInput: UserInput): Promise<User> {
    try {
      const newUser = await this.userModle.create(createUserInput);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const allUsers = await this.userModle.find({});
      if (allUsers.length == 0) {
        throw new NotFoundException();
      } else {
        return allUsers;
      }
    } catch (error) {
      throw error;
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      const user = await this.userModle.findOne({ id: id });
      if (user == null) {
        throw new NotFoundException();
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: string, updateUser: UserUpdateInput): Promise<User> {
    try {
      const user = await this.userModle.findOne({ id: id });
      if (user == null) {
        throw new NotFoundException();
      } else {
        const updatedUser = await this.userModle.findOneAndUpdate(
          { id: id },
          updateUser,
          { new: true },
        );
        return updatedUser;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string): Promise<string> {
    try {
      const user = await this.userModle.findOne({ id: id });
      if (user == null) {
        throw new NotFoundException();
      } else {
        const deletedUser = await this.userModle.deleteOne({ id: id });
        if (deletedUser.acknowledged === true) {
          return 'user with id: ' + id + ' deleted';
        } else {
          return 'user with id: ' + id + ' could not be deleted';
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
