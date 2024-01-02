import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: "5AkRP7htn27cjsnef9n2M9aQ5EX3Erp9"
    })]
})
export class AuthModule {

}