import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ForecastLineModuleBase } from "./base/forecastLine.module.base";
import { ForecastLineService } from "./forecastLine.service";
import { ForecastLineController } from "./forecastLine.controller";
import { ForecastLineResolver } from "./forecastLine.resolver";

@Module({
  imports: [ForecastLineModuleBase, forwardRef(() => AuthModule)],
  controllers: [ForecastLineController],
  providers: [ForecastLineService, ForecastLineResolver],
  exports: [ForecastLineService],
})
export class ForecastLineModule {}
