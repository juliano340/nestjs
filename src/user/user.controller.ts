import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UpdatePachUserDTO } from "./dto/update-patch.user.dto";
import { UpdatePutUserDTO } from "./dto/update-put.user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() {email,name,password}: CreateUserDTO) {
        return { email,name,password }
    }

    @Get()
    async list() {
        return { users: [] }
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id) {
        return { user: {}, id }
    }

    @Put(':id')
    async update(@Body() {email,name,password}: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
        return { email,name,password, id, method:'put' }

    }

    @Patch(':id')
    async updatePartial(@Body() {email,name,password}: UpdatePachUserDTO, @Param('id', ParseIntPipe) id) {
        return { email,name,password, id, method:'patch' }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id) {
        return { id }
    }
    

}