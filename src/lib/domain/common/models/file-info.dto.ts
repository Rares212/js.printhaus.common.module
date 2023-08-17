import {
    IsMongoId,
    IsNotEmpty, IsOptional,
    IsString
} from "class-validator";
import { AutoMap } from "@automapper/classes";

export class FileInfoDto {

    @AutoMap()
    @IsMongoId()
    id: string;

    @IsString()
    @IsNotEmpty()
    file: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    mime: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    fileName: string | null

    @AutoMap()
    @IsOptional()
    @IsString()
    comment: string | null;


    constructor(id: string, file: string, mime: string, fileName?: string | null, comment?: string | null) {
        this.id = id;
        this.file = file;
        this.mime = mime;
        this.fileName = fileName ? fileName : null;
        this.comment = comment ? comment : null;
    }
}
