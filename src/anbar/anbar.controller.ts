import { Controller, Get } from "@nestjs/common";
import { AnbarService } from "./anbar.service";

@Controller("anbar")
export class AnbarController {
  constructor(private readonly anbarService: AnbarService) {}

  @Get("getAllKind")
  getAllKind() {
    return this.anbarService.getAllKind()
  }
}
