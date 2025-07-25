import { ApiProperty } from "@nestjs/swagger";
import { IsString, isString } from "class-validator";

export class refreshTokenDto {
  @IsString()
  @ApiProperty({ type: "string", default: "" })
  token: string;
}
