import { AutoMap } from "@automapper/classes";
import {
    IsBoolean,
    IsISO4217CurrencyCode,
    IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsPositive,
    IsString, ValidateNested
} from "class-validator";
import { PrintDimensionsDto } from "../../printing/models/print-dimensions.dto";
import { PrintMaterialDto } from "../../printing/models/print.material.dto";
import { ImageInfoRespDto } from "../../image/models/image-info.resp.dto";

export class ShopItemDto {
    @AutoMap()
    @IsMongoId()
    id: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    name: string;

    @AutoMap()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    creator: string;

    @ValidateNested()
    material: PrintMaterialDto;

    @AutoMap()
    @IsNumber()
    @IsPositive()
    grams: number;

    @ValidateNested()
    dimensions: PrintDimensionsDto;

    @ValidateNested()
    mainPhoto: ImageInfoRespDto;

    @ValidateNested()
    galleryPhotos: ImageInfoRespDto[];

    @AutoMap()
    @IsBoolean()
    assemblyRequired: boolean;

    @AutoMap()
    @IsNumber()
    @IsPositive()
    costAmount: number;

    @AutoMap()
    @IsOptional()
    @IsNumber()
    @IsPositive()
    reducedCostAmount: number;

    @AutoMap()
    @IsISO4217CurrencyCode()
    costCurrency: string;

    @IsNumber()
    @IsPositive()
    reviewCount: number;

    @IsNumber()
    @IsPositive()
    reviewValue: number;

    @AutoMap({depth: 2})
    @IsString({ each: true })
    tags: string[];
}
