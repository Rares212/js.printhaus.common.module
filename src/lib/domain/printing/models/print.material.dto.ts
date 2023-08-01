import {
  IsDefined,
  IsEnum, IsHexColor, IsInt, IsISO4217CurrencyCode, IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString
} from "class-validator";
import {MaterialType} from "../util/material-type.enum";
import {AutoMap} from "@automapper/classes";

export class PrintMaterialDto {

  @AutoMap()
  @IsOptional()
  @IsMongoId()
  _id: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  name: string;

  @AutoMap()
  @IsDefined()
  @IsEnum(MaterialType)
  materialType: MaterialType;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsHexColor()
  color: string;

  @AutoMap()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  gramsPerCubicCentimeter: number;

  @AutoMap()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  printSpeedMultiplier: number;

  @AutoMap()
  @IsDefined()
  @IsNumber()
  @IsInt()
  costAmount: number;

  @AutoMap()
  @IsNotEmpty()
  @IsISO4217CurrencyCode()
  costCurrency: string;
}
