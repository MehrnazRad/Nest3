import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { KindsEntity } from "src/Modules/Entity/MySql/kinds.entity";
import { Repository } from "typeorm";

@Injectable()
export class AnbarService {
  constructor(
    @InjectRepository(KindsEntity)
    private readonly kindsRepository: Repository<KindsEntity>
  ) {}

  async getAllKind() {
    return this.kindsRepository.find();
  }
}
