import {
  IsDefined, IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested
} from "class-validator";
import {PrintDimensionsDto} from "./print-dimensions.dto";
import {DineroObject} from "dinero.js";

export class PrintModelDetailsRespDto {


  constructor(cubicCentimeters: number, dimensions: PrintDimensionsDto, grams: number, estimatedPrintTimeHours: number, cost: DineroObject, costCalculationMessage: string) {
    this.cubicCentimeters = cubicCentimeters;
    this.dimensions = dimensions;
    this.grams = grams;
    this.estimatedPrintTimeHours = estimatedPrintTimeHours;
    this.cost = cost;
    this.costCalculationMessage = costCalculationMessage;
  }

  @IsDefined()
  @IsNumber()
  @IsPositive()
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
  estimatedPrintTimeHours: number;

  @IsDefined()
  cost: DineroObject;

  @IsNotEmpty()
  @IsString()
  costCalculationMessage: string;
}
