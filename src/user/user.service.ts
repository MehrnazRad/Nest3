import { Injectable } from "@nestjs/common";
import { JwtService } from "src/Modules/Jwt/jwt.service";

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}

  private async createToken({ username }: { username: string }): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    return {
      accessToken: await this.jwtService.createAccessToken({ username }),
      refreshToken: await this.jwtService.createAccessToken({ username }),
    };
  }

  async login({ password, username }: { username: string; password: string }) {
    console.log(password, username);
    // const user = this.userEntity.findOne({username})
    // if (!user) {
    //   const newUser = this.userEntity.create({username, password})
    //   await newUser.save()
    // }
    // else if (user.password !== password) {
    //   throw Error("");
    // }
    return { login: true, ...(await this.createToken({ username })) };
  }
}
