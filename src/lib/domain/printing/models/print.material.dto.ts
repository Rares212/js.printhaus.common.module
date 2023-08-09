import {
    IsDefined,
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

    @AutoMap()
    @IsDefined()
    @IsMongoId()
    materialTypeId: string;

    @AutoMap()
    @IsNotEmpty()
    @IsString()
    name: string;

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
