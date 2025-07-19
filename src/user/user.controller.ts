import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "src/Modules/DTOs/login.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("login")
  login(@Body() body: LoginDto) {
    const { password, username } = body;
    return this.userService.login({ password, username });
  }
}
