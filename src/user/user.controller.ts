import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get All Users',
  })
  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @ApiOperation({
    summary: 'Get user by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return await this.userService.getUser(id);
  }

  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 201,
    description: 'User Created!',
  })
  @Post('create')
  async createUser(@Body() CreateUserDto: UserDto): Promise<User> {
    return await this.userService.createUser(CreateUserDto);
  }

  @ApiOperation({
    summary: 'Update user by ID',
  })
  @Post(':id/update')
  async updateUser(
    @Param('id') id: number,
    @Body() UserDto: UserDto,
  ): Promise<User> {
    return await this.userService.updateUser(id, UserDto);
  }

  @ApiOperation({
    summary: 'Delete user by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Delete(':id/delete')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
