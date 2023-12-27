import { Body, Controller, Delete, Get, Patch, Post, Put, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UpdatePachUserDTO } from "./dto/update-patch.user.dto";
import { UpdatePutUserDTO } from "./dto/update-put.user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";

@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data)
    }

    @Get()
    async list() {
        return this.userService.list()
    }

    @Get(':id')
    async show(@ParamId() id: number) {
        return this.userService.show(id)
    }

    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
        return this.userService.update(id, data)

    }

    @Patch(':id')
    async updatePartial(@Body() {email,name,password}: UpdatePachUserDTO, @ParamId() id: number) {
        return this.userService.updatePartial(id, {email,name,password})
    }

    @Delete(':id')
    async delete(@ParamId() id: number) {
        return this.userService.delete(id)
    }
    

}