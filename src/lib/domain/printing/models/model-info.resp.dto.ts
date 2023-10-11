import { SupportedMeshFileTypes } from "../util/supported-file-types.enum";
import { IsBoolean, IsEnum, IsUrl } from "class-validator";

export class ModelInfoRespDto {
    @IsUrl()
    signedUrl: string;

    @IsEnum(SupportedMeshFileTypes)
    fileExtension: SupportedMeshFileTypes;

    @IsBoolean()
    compressed: boolean;
}
