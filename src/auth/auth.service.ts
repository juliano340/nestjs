import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { todo } from "node:test";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {

    constructor(private readonly JwtService: JwtService, private readonly prisma: PrismaService) { }
    async createToken() {

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

        return user;
    }

    async reset(password: string, token: string) {

        //Todo: validate token

        const id = 0;

        await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                password,
            },
        });

        return true;

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

}