import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @ApiProperty({ type: "string", nullable: false, default: "admin" })
  username: string;
  
  @IsString()
  @ApiProperty({ type: "string", nullable: false, default: "1234" })
  password: string;
}
