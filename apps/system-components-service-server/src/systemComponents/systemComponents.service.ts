import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemComponentsServiceBase } from "./base/systemComponents.service.base";

@Injectable()
export class SystemComponentsService extends SystemComponentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
