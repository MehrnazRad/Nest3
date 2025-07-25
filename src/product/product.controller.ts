import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Render,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { ApiTags } from "@nestjs/swagger";
import { title } from "process";

@ApiTags("Product")
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}











  @Get("getAllProductByKindId/:kindId")
  getAllProductByDraft(@Param("kindId", ParseIntPipe) kindId: number) {
    return this.productService.getAllProductByDraft({ kindId });
  }

  @Get("getProductNames")
  async getProductNames() {
    // return this.productService.getProductNames();
    return {
      title: "لیست محصولات",
      data: await this.productService.getProductNames(),
    };
  }

  @Get("getStoragesNames")
  async getStoragesNames() {
    return this.productService.getStoragesNames();
  }

  @Get("getAllProductsByStorage")
  async getAllProductsByStorage(@Query("storageId") storageId?: string) {
    const finalId =
      !storageId || storageId === "all" ? "all" : parseInt(storageId);

    return this.productService.getAllProductsByStorage({
      storageId: finalId,
    });
  }

  @Get("getQtyReport")
  getQtyReport(@Query("productId") productId: number) {
    return this.productService.getQtyReportById(Number(productId));
  }
}
