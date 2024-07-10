import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemComponentsService } from "./systemComponents.service";
import { SystemComponentsControllerBase } from "./base/systemComponents.controller.base";

@swagger.ApiTags("systemComponents")
@common.Controller("systemComponents")
export class SystemComponentsController extends SystemComponentsControllerBase {
  constructor(protected readonly service: SystemComponentsService) {
    super(service);
  }
}
