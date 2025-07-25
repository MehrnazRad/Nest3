import { Injectable, NestMiddleware } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request, Response, NextFunction } from "express";
import { LoginDto } from "src/Modules/DTOs/login.dto";
import { refreshTokenDto } from "src/Modules/DTOs/refreshToken.dto";
import { JwtService } from "src/Modules/Jwt/jwt.service";
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

@Injectable()
export class DecodeTokenMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const body = req.body as refreshTokenDto;

    if (body.token) {
      const { username } = await this.jwtService.verifyRefreshToken(body.token);
      req.body.token = username;
    } else {
      throw Error("");
    }
    next();
  }
}
