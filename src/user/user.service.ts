import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create.user.dto";
import { IsEmail } from "class-validator";
import { User } from "@prisma/client";


@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {}

     async create({email, name, password}: CreateUserDTO) {

        return await this.prisma.user.create({
            data: {
                email,
                name,
                password,
            } 
        });

        return await this.prisma.user.create({data: {email, name, password}});
     }

        
       
        
    

}