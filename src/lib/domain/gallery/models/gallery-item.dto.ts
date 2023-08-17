import { AutoMap } from "@automapper/classes";
import {
    IsDataURI,
    IsISO4217CurrencyCode,
    IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsPositive,
    IsString, ValidateNested
} from "class-validator";
import { PrintDimensionsDto } from "../../printing/models/print-dimensions.dto";

export class GalleryItemDto {
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

    @IsNumber()
    @IsPositive()
    costAmount: number;

    @IsISO4217CurrencyCode()
    costCurrency: string;
}
