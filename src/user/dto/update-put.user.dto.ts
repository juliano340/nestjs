import { IsEmail, IsOptional, IsString, IsStrongPassword, MinLength } from "class-validator";
import { CreateUserDTO } from "./create.user.dto";

export class UpdatePutUserDTO extends CreateUserDTO {

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    @MinLength(6)
    password: string;
   
}