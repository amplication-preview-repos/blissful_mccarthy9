/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ForecastLineService } from "../forecastLine.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ForecastLineCreateInput } from "./ForecastLineCreateInput";
import { ForecastLine } from "./ForecastLine";
import { ForecastLineFindManyArgs } from "./ForecastLineFindManyArgs";
import { ForecastLineWhereUniqueInput } from "./ForecastLineWhereUniqueInput";
import { ForecastLineUpdateInput } from "./ForecastLineUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ForecastLineControllerBase {
  constructor(
    protected readonly service: ForecastLineService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ForecastLine })
  @nestAccessControl.UseRoles({
    resource: "ForecastLine",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createForecastLine(
    @common.Body() data: ForecastLineCreateInput
  ): Promise<ForecastLine> {
    return await this.service.createForecastLine({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        forecastingTime: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ForecastLine] })
  @ApiNestedQuery(ForecastLineFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ForecastLine",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async forecastLines(@common.Req() request: Request): Promise<ForecastLine[]> {
    const args = plainToClass(ForecastLineFindManyArgs, request.query);
    return this.service.forecastLines({
      ...args,
      select: {
        createdAt: true,
        forecastingTime: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ForecastLine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ForecastLine",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async forecastLine(
    @common.Param() params: ForecastLineWhereUniqueInput
  ): Promise<ForecastLine | null> {
    const result = await this.service.forecastLine({
      where: params,
      select: {
        createdAt: true,
        forecastingTime: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ForecastLine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ForecastLine",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateForecastLine(
    @common.Param() params: ForecastLineWhereUniqueInput,
    @common.Body() data: ForecastLineUpdateInput
  ): Promise<ForecastLine | null> {
    try {
      return await this.service.updateForecastLine({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          forecastingTime: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ForecastLine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ForecastLine",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteForecastLine(
    @common.Param() params: ForecastLineWhereUniqueInput
  ): Promise<ForecastLine | null> {
    try {
      return await this.service.deleteForecastLine({
        where: params,
        select: {
          createdAt: true,
          forecastingTime: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
