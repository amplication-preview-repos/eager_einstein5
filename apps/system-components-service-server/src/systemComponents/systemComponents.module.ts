import { Module } from "@nestjs/common";
import { SystemComponentsModuleBase } from "./base/systemComponents.module.base";
import { SystemComponentsService } from "./systemComponents.service";
import { SystemComponentsController } from "./systemComponents.controller";
import { SystemComponentsResolver } from "./systemComponents.resolver";

@Module({
  imports: [SystemComponentsModuleBase],
  controllers: [SystemComponentsController],
  providers: [SystemComponentsService, SystemComponentsResolver],
  exports: [SystemComponentsService],
})
export class SystemComponentsModule {}
