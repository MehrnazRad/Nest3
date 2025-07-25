// import { Body, Controller, Post } from '@nestjs/common';
// import { UserService } from './user.service';
// import { LoginDto } from 'src/Modules/DTOs/login.dto';

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post('login')
//   login(@Body() body: LoginDto) {
//     return this.userService.login(body);
//   }
// }

// src/user/user.controller.ts
import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDto } from "src/Modules/DTOs/login.dto";
import { refreshTokenDto } from "src/Modules/DTOs/refreshToken.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("login")
  login(@Body() body: LoginDto) {
    const { password, username } = body;
    return this.userService.login({ password, username });
  }

  @Post("refreshToken")
  refreshToken(@Body() body: refreshTokenDto) {
    const { token } = body;
    return this.userService.refreshToken({ token });
  }
}
