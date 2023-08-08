import { AutoMap } from "@automapper/classes";
import {
    IsDataURI,
    IsDefined,
    IsISO4217CurrencyCode,
    IsMongoId, IsNumber, IsPositive,
    IsString
} from "class-validator";

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
