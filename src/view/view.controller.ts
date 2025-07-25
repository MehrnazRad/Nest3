import { Controller, Get, Query, Render } from "@nestjs/common";
import { ProductService } from "src/product/product.service";

@Controller("view")
export class ViewController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Render("storagesNames")
  async getStoragesNames() {
    return { title: "", data: await this.productService.getStoragesNames() };
  }

  @Get("productsByStorage")
  @Render("productsByStorage")
  async getAllProductsByStorage(@Query("storageId") storageId?: string) {
    const finalId =
      !storageId || storageId === "all" ? "all" : parseInt(storageId);

    return {
      title: "جستجوی محصولات انبار",
      data: await this.productService.getAllProductsByStorage({
        storageId: finalId,
      }),
      select: await this.productService.getStoragesNames(),
      selectedStorage: storageId || "all",
    };
  }

  @Get("getProductNames")
  @Render("productNames")
  async getProductNames() {
    return {
      title: "لیست محصولات",
      data: await this.productService.getProductNames(),
    };
  }

  @Get("login")
  @Render("login")
  async login() {
    return {
      title: "فرم ورود",
    };
  }
}
