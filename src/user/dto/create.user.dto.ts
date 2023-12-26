import { IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDTO{
    @IsString()
    name: string;
    @IsEmail()
    email: string;
   @IsString()
   @MinLength(6)

    password: string;
}

function Password(arg0: { minLength: number; minLowercase: number; minUppercase: number; minNumbers: number; minSymbols: number; }): (target: CreateUserDTO, propertyKey: "password") => void {
    throw new Error("Function not implemented.");
}
