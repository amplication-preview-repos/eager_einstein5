/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SystemComponents } from "./SystemComponents";
import { SystemComponentsCountArgs } from "./SystemComponentsCountArgs";
import { SystemComponentsFindManyArgs } from "./SystemComponentsFindManyArgs";
import { SystemComponentsFindUniqueArgs } from "./SystemComponentsFindUniqueArgs";
import { CreateSystemComponentsArgs } from "./CreateSystemComponentsArgs";
import { UpdateSystemComponentsArgs } from "./UpdateSystemComponentsArgs";
import { DeleteSystemComponentsArgs } from "./DeleteSystemComponentsArgs";
import { SystemComponentsService } from "../systemComponents.service";
@graphql.Resolver(() => SystemComponents)
export class SystemComponentsResolverBase {
  constructor(protected readonly service: SystemComponentsService) {}

  async _systemComponentsItemsMeta(
    @graphql.Args() args: SystemComponentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SystemComponents])
  async systemComponentsItems(
    @graphql.Args() args: SystemComponentsFindManyArgs
  ): Promise<SystemComponents[]> {
    return this.service.systemComponentsItems(args);
  }

  @graphql.Query(() => SystemComponents, { nullable: true })
  async systemComponents(
    @graphql.Args() args: SystemComponentsFindUniqueArgs
  ): Promise<SystemComponents | null> {
    const result = await this.service.systemComponents(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SystemComponents)
  async createSystemComponents(
    @graphql.Args() args: CreateSystemComponentsArgs
  ): Promise<SystemComponents> {
    return await this.service.createSystemComponents({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SystemComponents)
  async updateSystemComponents(
    @graphql.Args() args: UpdateSystemComponentsArgs
  ): Promise<SystemComponents | null> {
    try {
      return await this.service.updateSystemComponents({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SystemComponents)
  async deleteSystemComponents(
    @graphql.Args() args: DeleteSystemComponentsArgs
  ): Promise<SystemComponents | null> {
    try {
      return await this.service.deleteSystemComponents(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
