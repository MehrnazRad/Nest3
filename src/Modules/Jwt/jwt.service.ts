import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { SignJWT, jwtVerify } from "jose";

@Injectable()
export class JwtService {
  protected secretAccess: Uint8Array;
  protected secretRefresh: Uint8Array;

  constructor(private configService: ConfigService) {
    const token_access_token = this.configService.get("App.TOKEN_ACC");
    const token_refresh_token = this.configService.get("App.TOKEN_REF");
    this.secretAccess = new TextEncoder().encode(token_access_token);
    this.secretRefresh = new TextEncoder().encode(token_refresh_token);
  }

  async createRefreshToken({ ...arg }) {
    const time = this.configService.get("App.TOKEN_REF_T");
    const token = await new SignJWT(arg)
      .setProtectedHeader({ alg: "HS256" })
      .setSubject("refresh")
      .setIssuer("example.com")
      .setAudience("user")
      .setExpirationTime(time)
      .setIssuedAt()
      .sign(this.secretRefresh);
    return token;
  }

  async verifyRefreshToken(token: string) {
    const { payload, protectedHeader } = await jwtVerify(
      token,
      this.secretRefresh
    );
    return payload;
  }

  async createAccessToken({ ...arg }) {
    const time = this.configService.get("App.TOKEN_ACC_T");
    const token = await new SignJWT(arg)
      .setProtectedHeader({ alg: "HS256" })
      .setSubject("access")
      .setIssuer("example.com")
      .setAudience("user")
      .setExpirationTime(time)
      .setIssuedAt()
      .sign(this.secretAccess);
    return token;
  }

  async verifyAccessToken(token: string) {
    const { payload, protectedHeader } = await jwtVerify(
      token,
      this.secretAccess
    );
    return payload;
  }
}
