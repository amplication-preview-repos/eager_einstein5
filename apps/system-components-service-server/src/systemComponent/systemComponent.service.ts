import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemComponentServiceBase } from "./base/systemComponent.service.base";

@Injectable()
export class SystemComponentService extends SystemComponentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
