import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateuserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
