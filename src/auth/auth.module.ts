import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [
        JwtModule.register({
            secret: "5AkRP7htn27cjsnef9n2M9aQ5EX3Erp9"
        }),
    UserModule,
    PrismaModule        

    ],
    controllers: [AuthController]

})
export class AuthModule {

}