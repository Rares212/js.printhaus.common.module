import { IsNumber, IsPositive } from "class-validator";

// Note: all dimensions are in mm
export class PrintDimensionsDto {

    constructor(width: number, height: number, depth: number) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    @IsNumber()
    @IsPositive()
    width: number;

    @IsNumber()
    @IsPositive()
    height: number;

    @IsNumber()
    @IsPositive()
    depth: number;
}
