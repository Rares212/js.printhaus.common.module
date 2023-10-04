import { AutoMap } from "@automapper/classes";
import { IsMongoId, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class ImageInfoDto {
    @AutoMap()
    @IsOptional()
    @IsMongoId()
    id: string;

    @AutoMap()
    @IsString()
    title: string;

    @AutoMap()
    @IsOptional()
    caption: string;

    @IsUrl()
    originalImageUrl: string;

    @IsUrl()
    smallImageUrl: string;

    @IsUrl()
    mediumImageUrl: string;

    @IsUrl()
    largeImageUrl: string;

    @AutoMap()
    @IsNumber()
    viewingPriority: number;
}
