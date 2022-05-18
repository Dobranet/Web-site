import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
