import {
    IsDefined,
    IsMongoId,
    IsNotEmpty, IsOptional,
    IsString
} from "class-validator";

export class FileInfoDto {
    @IsDefined()
    @IsMongoId()
    id: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    fileName: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    file: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    mime: string;

    @IsOptional()
    @IsString()
    comment: string | null;


    constructor(id: string, fileName: string, file: string, mime: string, comment?: string | null) {
        this.id = id;
        this.fileName = fileName;
        this.file = file;
        this.mime = mime;
        this.comment = comment ? comment : null;
    }
}
