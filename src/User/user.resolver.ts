import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserType } from './object-type/user.type';
import { UserService } from './user-service/user.service';
import { UserInput } from './input-type/user.input';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => [UserType])
  getAllUsers(): Promise<UserType[]> {
    return this.userService.getAllUsers();
  }

  @Query(() => UserType)
  getUser(@Args('id') id: string): Promise<UserType> {
    return this.userService.getUser(id);
  }

  @Mutation(() => UserType)
  creatUser(@Args('createUser') createUserInput: UserInput): Promise<UserType> {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserType)
  updateUser(
    @Args('id') id: string,
    @Args('updateUser') updateUserInput: UserInput,
  ): Promise<UserType> {
    return this.userService.updateUser(id, updateUserInput);
  }

  @Mutation(() => String)
  deleteUser(@Args('id') id: string): Promise<string> {
    return this.userService.deleteUser(id);
  }
}
