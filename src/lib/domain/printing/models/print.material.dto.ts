import {
    IsHexColor,
    IsInt,
    IsISO4217CurrencyCode,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class PrintMaterialDto {
    @AutoMap()
    @IsOptional()
    @IsMongoId()
    id: string;

    @IsMongoId()
    materialTypeId: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    materialTypeShortName: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    name: string;

    @AutoMap()
    @IsOptional()
    @IsHexColor()
    color: string;

    @AutoMap()
    @IsNumber()
    @IsPositive()
    gramsPerCubicCentimeter: number;

    @AutoMap()
    @IsNumber()
    @IsPositive()
    printSpeedMultiplier: number;

    @AutoMap()
    @IsNumber()
    @IsInt()
    costAmount: number;

    @AutoMap()
    @IsISO4217CurrencyCode()
    costCurrency: string;


    constructor(id: string, materialTypeId: string, name: string, color: string, gramsPerCubicCentimeter: number, printSpeedMultiplier: number, costAmount: number, costCurrency: string) {
        this.id = id;
        this.materialTypeId = materialTypeId;
        this.name = name;
        this.color = color;
        this.gramsPerCubicCentimeter = gramsPerCubicCentimeter;
        this.printSpeedMultiplier = printSpeedMultiplier;
        this.costAmount = costAmount;
        this.costCurrency = costCurrency;
    }
}
