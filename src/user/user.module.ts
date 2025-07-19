import { MiddlewareConsumer, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { JwtModule } from "src/Modules/Jwt/jwt.module";
import { HashPassMiddleware } from "./user.middleware";

@Module({
  imports: [JwtModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HashPassMiddleware).forRoutes("/user/login");
  }
}
