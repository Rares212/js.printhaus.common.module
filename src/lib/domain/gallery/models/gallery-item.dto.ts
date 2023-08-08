import { AutoMap } from "@automapper/classes";
import {
    IsDataURI,
    IsDefined,
    IsISO4217CurrencyCode,
    IsMongoId, IsNumber, IsPositive,
    IsString, ValidateNested
} from "class-validator";
import { PrintDimensionsDto } from "../../printing/models/print-dimensions.dto";

export class GalleryItemDto {
    @AutoMap()
    @IsDefined()
    @IsMongoId()
    id: string;

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    description: string;

    @ValidateNested()
    dimensions: PrintDimensionsDto;

    @IsDefined()
    @IsDataURI()
    img: string;

    @IsDefined()
    @IsNumber()
    @IsPositive()
    costAmount: number;

    @IsDefined()
    @IsISO4217CurrencyCode()
    costCurrency: string;
}
