import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ForecastLineResolverBase } from "./base/forecastLine.resolver.base";
import { ForecastLine } from "./base/ForecastLine";
import { ForecastLineService } from "./forecastLine.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ForecastLine)
export class ForecastLineResolver extends ForecastLineResolverBase {
  constructor(
    protected readonly service: ForecastLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
