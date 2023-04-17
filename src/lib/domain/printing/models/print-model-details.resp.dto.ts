import { Mesh } from 'three';
import {IsDefined, IsNumber, IsPositive, ValidateNested} from "class-validator";
import {PriceDto} from "../../shop/models/price.dto";
import {PrintDimensionsDto} from "./print-dimensions.dto";

export class PrintModelDetailsRespDto {
  @IsDefined()
  processedMesh: Mesh;

  @IsDefined()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  })
  cubicCentimeters: number;

  @IsDefined()
  @ValidateNested()
  dimensions: PrintDimensionsDto;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  grams: number

  @IsDefined()
  @IsNumber()
  @IsPositive()
  estimatedPrintTimeSeconds: number;

  @IsDefined()
  @ValidateNested()
  cost: PriceDto;
}
