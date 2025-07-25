import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { DraftItemsEntity } from "src/Modules/Entity/MySql/draft-items.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DraftItemsEntity])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
