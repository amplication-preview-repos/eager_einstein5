import * as graphql from "@nestjs/graphql";
import { SystemComponentResolverBase } from "./base/systemComponent.resolver.base";
import { SystemComponent } from "./base/SystemComponent";
import { SystemComponentService } from "./systemComponent.service";

@graphql.Resolver(() => SystemComponent)
export class SystemComponentResolver extends SystemComponentResolverBase {
  constructor(protected readonly service: SystemComponentService) {
    super(service);
  }
}
