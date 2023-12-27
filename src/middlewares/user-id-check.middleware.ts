import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UserIdCheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        if (isNaN(parseInt(req.params.id)) || parseInt(req.params.id) <= 0) {
            throw new BadRequestException('invalid id');
            //res.status(400).json({message: 'invalid id'});
            
        }
        next();
        
    }
}