import * as graphql from "@nestjs/graphql";
import { SystemComponentsResolverBase } from "./base/systemComponents.resolver.base";
import { SystemComponents } from "./base/SystemComponents";
import { SystemComponentsService } from "./systemComponents.service";

@graphql.Resolver(() => SystemComponents)
export class SystemComponentsResolver extends SystemComponentsResolverBase {
  constructor(protected readonly service: SystemComponentsService) {
    super(service);
  }
}
