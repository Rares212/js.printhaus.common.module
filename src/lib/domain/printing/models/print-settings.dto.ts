import {PrintQuality} from "../util/print-quality.enum";
import {IsDefined, IsEnum} from "class-validator";
import {PrintStrength} from "../util/print-strength.enum";

export class PrintSettingsDto {
  @IsDefined()
  @IsEnum(PrintQuality)
  quality: PrintQuality;

  @IsDefined()
  @IsEnum(PrintStrength)
  strength: PrintStrength;

  constructor(quality: PrintQuality, strength: PrintStrength) {
    this.quality = quality;
    this.strength = strength;
  }
}
