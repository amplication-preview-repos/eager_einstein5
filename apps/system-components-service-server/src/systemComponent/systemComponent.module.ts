import { Module } from "@nestjs/common";
import { SystemComponentModuleBase } from "./base/systemComponent.module.base";
import { SystemComponentService } from "./systemComponent.service";
import { SystemComponentController } from "./systemComponent.controller";
import { SystemComponentResolver } from "./systemComponent.resolver";

@Module({
  imports: [SystemComponentModuleBase],
  controllers: [SystemComponentController],
  providers: [SystemComponentService, SystemComponentResolver],
  exports: [SystemComponentService],
})
export class SystemComponentModule {}
