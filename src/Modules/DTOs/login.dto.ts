// src/Modules/DTOs/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({ type: 'string', default: 'admin' })
  username: string;

  @IsString()
  @ApiProperty({ type: 'string', default: '1234' })
  password: string;
}