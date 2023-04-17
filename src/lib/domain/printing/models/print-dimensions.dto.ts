import {IsDefined, IsNumber, IsPositive} from "class-validator";

export class PrintDimensionsDto {
  @IsDefined()
  @IsNumber()
  @IsPositive()
  length: number;
  @IsDefined()
  @IsNumber()
  @IsPositive()
  width: number;
  @IsDefined()
  @IsNumber()
  @IsPositive()
  height: number;
}
