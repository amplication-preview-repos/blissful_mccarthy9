import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ForecastLineService } from "./forecastLine.service";
import { ForecastLineControllerBase } from "./base/forecastLine.controller.base";

@swagger.ApiTags("forecastLines")
@common.Controller("forecastLines")
export class ForecastLineController extends ForecastLineControllerBase {
  constructor(
    protected readonly service: ForecastLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
