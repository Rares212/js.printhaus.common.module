import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class ImageInfoRespDto {
    @IsUrl()
    originalImageUrl: string;

    @IsUrl()
    largeImageUrl: string;

    @IsUrl()
    mediumImageUrl: string;

    @IsUrl()
    smallImageUrl: string;

    @IsNumber()
    viewingPriority: number;

    @IsOptional()
    @IsString()
    caption?: string;

    constructor(
        originalImageUrl: string,
        largeImageUrl: string,
        mediumImageUrl: string,
        smallImageUrl: string,
        viewingPriority: number,
        caption: string = ''
    ) {
        this.originalImageUrl = originalImageUrl;
        this.largeImageUrl = largeImageUrl;
        this.mediumImageUrl = mediumImageUrl;
        this.smallImageUrl = smallImageUrl;
        this.viewingPriority = viewingPriority;
        this.caption = caption;
    }
}
