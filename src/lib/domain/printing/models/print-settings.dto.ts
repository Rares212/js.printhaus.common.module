import {PrintQuality} from "../util/print-quality.enum";
import {IsDefined, IsEnum} from "class-validator";

export class PrintSettingsDto {
  @IsDefined()
  @IsEnum(PrintQuality)
  quality: PrintQuality;
}
