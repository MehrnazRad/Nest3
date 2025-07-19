import { Injectable, NestMiddleware } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request, Response, NextFunction } from "express";
import { LoginDto } from "src/Modules/DTOs/login.dto";
import { hashPassword } from "src/Modules/utilities/hash";

@Injectable()
export class HashPassMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const body = req.body as LoginDto;

    if (body.password) {
      const key = this.configService.get("App.TOKEN_HASH");
      req.body.password = hashPassword(body.password, key);
    } else {
      throw Error("");
    }
    next();
  }
}
