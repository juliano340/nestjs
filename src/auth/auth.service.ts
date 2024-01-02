import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
 
    constructor(private readonly JwtService) {}
    async createToken() {

    }

    async checkToken(token: string){

    }

}