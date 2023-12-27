import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create.user.dto";
import { IsEmail } from "class-validator";
import { User } from "@prisma/client";
import { UpdatePutUserDTO } from "./dto/update-put.user.dto";
import { UpdatePachUserDTO } from "./dto/update-patch.user.dto";
import { NotFoundError } from "rxjs";


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

     async list() {

        return await this.prisma.user.findMany();
     }

        
     async show(id: number) {

        return await this.prisma.user.findUnique({where: {id}});
     }

     async update(id: number, {email, name, password}: UpdatePutUserDTO) {
        console.log({email, name, password}); 

        return this.prisma.user.update({
            data: {
                email,
                name,
                password,
            }, 
            where: {
                id
            }
        });
     }
       
     async updatePartial(id: number, {email, name, password}: UpdatePachUserDTO) {
        
        const data: any = {};

        return this.prisma.user.update({
            data, 
            where: {
                id
            }
        });
     }
        
     async delete(id: number) {

        if (!(await this.show(id))) {
            throw new NotFoundException(`User ${id} not found`);
            
        }

        return  this.prisma.user.delete({where: {id}});
     }
    

}