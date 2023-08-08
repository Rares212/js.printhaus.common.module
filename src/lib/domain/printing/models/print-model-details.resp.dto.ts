import {
    IsDefined,
    IsNumber,
    IsPositive,
    ValidateNested,
} from 'class-validator';
import { PrintDimensionsDto } from './print-dimensions.dto';
import { PrintCostPartDto } from './print-cost-part.dto';
import { DineroObject } from "dinero.js";

export class PrintModelDetailsRespDto {

    constructor(
        cubicCentimeters: number,
        dimensions: PrintDimensionsDto,
        grams: number,
        estimatedPrintTimeHours: number,
        cost: DineroObject,
        printCostParts: PrintCostPartDto[]
    ) {
        this.cubicCentimeters = cubicCentimeters;
        this.dimensions = dimensions;
        this.grams = grams;
        this.estimatedPrintTimeHours = estimatedPrintTimeHours;
        this.cost = cost;
        this.printCostParts = printCostParts;
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
    grams: number;

    @IsDefined()
    @IsNumber()
    @IsPositive()
    estimatedPrintTimeHours: number;

    @IsDefined()
    cost: DineroObject;

    @IsDefined()
    @ValidateNested()
    printCostParts: PrintCostPartDto[];
}
