import {
    ArrayMinSize,
    IsArray,
    IsMongoId, IsNotEmpty, IsOptional,
    IsString
} from "class-validator";
import { AutoMap } from "@automapper/classes";

export class PrintMaterialTypeDto {
    @AutoMap()
    @IsMongoId()
    id: string;

    @IsArray()
    @ArrayMinSize(1)
    photoIdList: string[];

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    shortName: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    description: string;

    @AutoMap()
    @IsOptional()
    @IsArray()
    availableColors: string[];

    @AutoMap()
    @IsOptional()
    @IsArray()
    proList: string[];

    @AutoMap()
    @IsOptional()
    @IsArray()
    conList: string[];

    constructor(id: string, photoIdList: string[], shortName: string, fullName: string, description: string, availableColors: string[], proList: string[], conList: string[]) {
        this.id = id;
        this.photoIdList = photoIdList;
        this.shortName = shortName;
        this.fullName = fullName;
        this.description = description;
        this.availableColors = availableColors;
        this.proList = proList;
        this.conList = conList;
    }
}
