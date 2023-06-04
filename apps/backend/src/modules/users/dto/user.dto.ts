import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsString,
} from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly username!: string;

  @IsString()
  @MinLength(6)
  readonly password!: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @IsString()
  readonly name!: string;

  @IsString()
  readonly accessToken!: string;

  @IsString()
  readonly refreshToken!: string;
}
