import { Module } from "@nestjs/common";
import { AnbarController } from "./anbar.controller";
import { AnbarService } from "./anbar.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KindsEntity } from "src/Modules/Entity/MySql/kinds.entity";

@Module({
  imports: [TypeOrmModule.forFeature([KindsEntity])],
  controllers: [AnbarController],
  providers: [AnbarService],
})
export class AnbarModule {}
