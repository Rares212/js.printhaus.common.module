import {
  IsDefined,
  IsEnum, IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive, IsRgbColor,
  IsString
} from "class-validator";
import {MaterialType} from "../util/material-type.enum";
import {Dinero} from "dinero.js";


export class PrintMaterialDto {
  @IsOptional()
  @IsMongoId()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(MaterialType)
  materialType: MaterialType;

  @IsOptional()
  @IsString()
  @IsRgbColor()
  color: string;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  gramsPerCubicCentimeter: number;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  printSpeedMultiplier: number;

  @IsDefined()
  costPerGram: Dinero;
}
