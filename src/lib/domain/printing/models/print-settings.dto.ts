import { PrintQuality } from '../util/print-quality.enum';
import { IsEnum } from 'class-validator';
import { PrintStrength } from '../util/print-strength.enum';

export class PrintSettingsDto {
    @IsEnum(PrintQuality)
    quality: PrintQuality;

    @IsEnum(PrintStrength)
    strength: PrintStrength;

    constructor(quality: PrintQuality, strength: PrintStrength) {
        this.quality = quality;
        this.strength = strength;
    }
}
