import {IsDefined, IsNumber, IsPositive} from "class-validator";

// Note: all dimensions are in mm
export class PrintDimensionsDto {

  constructor(width: number, height: number, depth: number) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  @IsDefined()
  @IsNumber()
  @IsPositive()
  width: number;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  height: number;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  depth: number;
}
