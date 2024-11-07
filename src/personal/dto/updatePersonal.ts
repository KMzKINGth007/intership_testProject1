import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePersonalDto {
    @IsNumber()
    id: number;
  
    @IsString()
    @IsOptional()
    firstName: string;
  
    @IsString()
    @IsOptional()
    lastName: string;
  
    @IsString()
    @IsOptional()
    nickName: string;
  
    @IsNumber()
    @IsOptional()
    age: number;
  
    @IsString()
    @IsOptional()
    birthday: string;
  
    @IsString()
    @IsOptional()
    PhoneNumber: string;
  
    @IsString()
    @IsOptional()
    email: string;
  }