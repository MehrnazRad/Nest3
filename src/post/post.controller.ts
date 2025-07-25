import { Body, Controller, Post } from "@nestjs/common";
import { PostService, CreateDraftItemInput } from "./post.service";
import { ApiTags, ApiBody } from "@nestjs/swagger";

@ApiTags("Post")
@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post("draft-items")
  @ApiBody({ type: [Object] }) // برای مستندسازی Swagger
  async postDraftItems(@Body() body: CreateDraftItemInput[]) {
    return this.postService.postDraftItems(body);
  }
}
