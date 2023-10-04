import { IsBoolean, IsMongoId } from "class-validator";

export class ImageRequestDto {
    @IsMongoId()
    imageId: string;

    @IsBoolean()
    thumbnail: boolean;

    constructor(imageId: string, thumbnail: boolean) {
        this.imageId = imageId;
        this.thumbnail = thumbnail;
    }
}
