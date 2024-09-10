import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ForecastLineServiceBase } from "./base/forecastLine.service.base";

@Injectable()
export class ForecastLineService extends ForecastLineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
