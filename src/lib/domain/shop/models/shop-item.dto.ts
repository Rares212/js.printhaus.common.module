import { AutoMap } from "@automapper/classes";
import {
    IsBoolean,
    IsDataURI,
    IsISO4217CurrencyCode,
    IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsPositive,
    IsString, ValidateNested
} from "class-validator";
import { PrintDimensionsDto } from "../../printing/models/print-dimensions.dto";

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
    dimensions: PrintDimensionsDto;

    @IsDataURI()
    img: string;

    @IsString()
    @IsNotEmpty()
    materialName: string;

    @IsString()
    @IsNotEmpty()
    materialType: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsBoolean()
    assemblyRequired: boolean;

    @IsNumber()
    @IsPositive()
    reviewCount: number;

    @IsNumber()
    @IsPositive()
    reviewValue: number;

    @IsNumber()
    @IsPositive()
    version: number;

    @IsString({ each: true })
    tags: string[];

    @IsNumber()
    @IsPositive()
    costAmount: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    reducedCostAmount: number;

    @IsISO4217CurrencyCode()
    costCurrency: string;
}
