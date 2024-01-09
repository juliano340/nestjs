import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma, User } from "@prisma/client";
import { todo } from "node:test";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { UserService } from "src/user/user.service";
import { access } from "fs";

@Injectable()
export class AuthService {

    constructor(private readonly JwtService: JwtService, private readonly prisma: PrismaService, private readonly userService: UserService) { }
    
    async createToken(user: User) {
        return  {

            accessToken: this.JwtService.sign(  { 
            
                sub: user.id,
                name: user.name,
                email: user.email
            }, {
            expiresIn: "7 days",
            // subject: String(user.id),
            issuer: "Login SERVICE",
            audience: "USERS"
    
            })
        }
        



    }

    async checkToken(token: string) {

    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
                password
            }
        });

        if (!user) {
            throw new UnauthorizedException("Invalid email or password");
        }

        return this.createToken(user);
    }

    async reset(password: string, token: string) {

        //Todo: validate token

        const id = 0;

        const user = await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                password,
            },
        });

        return  this.createToken(user);;

    }



    async forget(email: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            throw new UnauthorizedException("Invalid email or password");
        }

        //TODO: send email

        return true;
    }

    async register(data: AuthRegisterDTO)    {
        const user = await this.userService.create(data);
        return this.createToken(user);

    }

}