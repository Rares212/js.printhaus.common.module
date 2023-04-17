import {
  IsDefined,
  IsMongoId,
  IsNotEmpty,
  ValidateNested
} from "class-validator";

import {PrintSettingsDto} from "./print-settings.dto";
export class PrintModelDetailsReqDto {
  @IsDefined()
  meshFile: ArrayBuffer;

  @IsNotEmpty()
  @IsMongoId()
  materialId: string;

  @IsDefined()
  @ValidateNested()
  printSettings: PrintSettingsDto;
}
