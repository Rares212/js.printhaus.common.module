import { AutoMap } from "@automapper/classes";
import {
    IsBoolean,
    IsISO4217CurrencyCode,
    IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsPositive,
    IsString, ValidateNested
} from "class-validator";
import { PrintDimensionsDto } from "../../printing/models/print-dimensions.dto";
import { PrintMaterialDto } from "../../printing/models/print.material.dto";

export class ShopItemDto {
    @AutoMap()
    @IsMongoId()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    creator: string;

    @ValidateNested()
    material: PrintMaterialDto;

    @IsNumber()
    @IsPositive()
    grams: number;

    @ValidateNested()
    dimensions: PrintDimensionsDto;

    @IsMongoId()
    thumbnailId: string;

    @IsMongoId({ each: true })
    photoIds: string[];

    @IsBoolean()
    assemblyRequired: boolean;

    @IsNumber()
    @IsPositive()
    costAmount: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    reducedCostAmount: number;

    @IsISO4217CurrencyCode()
    costCurrency: string;

    @IsNumber()
    @IsPositive()
    reviewCount: number;

    @IsNumber()
    @IsPositive()
    reviewValue: number;

    @IsString({ each: true })
    tags: string[];

}
