import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePersonalDto {
    @IsString()
    firstName: string;
  
    @IsString()
    lastName: string;
  
    @IsNumber()
    age: number;

  
    @IsString()
    @IsOptional()
    nickName: string;
  
    @IsString()
    @IsOptional()
    birthday: string;
  
    @IsNumber()
    @IsOptional()
    phoneNumber: number;
  
    @IsString()
    @IsOptional()
    email: string;
  }