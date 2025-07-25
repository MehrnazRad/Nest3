import { MiddlewareConsumer, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { JwtModule } from "src/Modules/Jwt/jwt.module";
import { DecodeTokenMiddleware, HashPassMiddleware } from "./user.middleware";
import { UserEntity } from "src/Modules/Entity/MySql/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  
  imports: [TypeOrmModule.forFeature([UserEntity]),
    JwtModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HashPassMiddleware).forRoutes("/user/login");
    consumer.apply(DecodeTokenMiddleware).forRoutes("/user/refreshToken");
  }
}
