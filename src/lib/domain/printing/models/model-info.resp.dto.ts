import { SupportedMeshFileTypes } from "../util/supported-file-types.enum";
import { IsEnum, IsUrl } from "class-validator";

export class ModelInfoRespDto {
    @IsUrl()
    signedUrl: string;

    @IsEnum(SupportedMeshFileTypes)
    fileType: SupportedMeshFileTypes;
}
