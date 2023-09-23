import { AutoMap } from "@automapper/classes";
import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class HausImageDto {
    @AutoMap()
    @IsOptional()
    @IsMongoId()
    id: string;

    @AutoMap()
    @IsString()
    title: string;

    @AutoMap()
    @IsMongoId()
    thumbnailId: string;

    @AutoMap()
    @IsMongoId()
    imageId: string;

    @AutoMap()
    @IsNumber()
    viewingPriority: number;
}
