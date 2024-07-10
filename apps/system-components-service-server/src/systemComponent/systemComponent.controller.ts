import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemComponentService } from "./systemComponent.service";
import { SystemComponentControllerBase } from "./base/systemComponent.controller.base";

@swagger.ApiTags("systemComponents")
@common.Controller("systemComponents")
export class SystemComponentController extends SystemComponentControllerBase {
  constructor(protected readonly service: SystemComponentService) {
    super(service);
  }
}
