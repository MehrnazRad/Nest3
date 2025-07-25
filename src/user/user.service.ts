import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/Modules/Entity/MySql/user.entity";
import { Repository } from "typeorm";
import { JwtService } from "src/Modules/Jwt/jwt.service";
import { ConfigService } from "@nestjs/config";
import { hashPassword } from "src/Modules/utilities/hash";

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectRepository(UserEntity)
    private readonly userService: Repository<UserEntity>
  ) {}

  private async createToken({ username }: { username: string }) {
    return {
      accessToken: await this.jwtService.createAccessToken({ username }),
      refreshToken: await this.jwtService.createRefreshToken({ username }),
    };
  }

  async login({ username, password }: { username: string; password: string }) {
    const user = await this.userService.findOne({ where: { username } });

    if (!user) {
      const newUser = this.userService.create({
        username,
        password,
        role: "user",
      });
      await this.userService.save(newUser);

      return {
        login: true,
        ...(await this.createToken({ username })),
      };
    }

    if (user.password !== password) {
      throw new UnauthorizedException("رمز عبور اشتباه است");
    }

    return {
      login: true,
      ...(await this.createToken({ username })),
    };
  }

  async refreshToken({ token }: { token: string }) {
    return {
      login: true,
      ...(await this.createToken({ username: token })),
    };
  }
}
