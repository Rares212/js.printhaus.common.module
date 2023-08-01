export enum PrintQuality {
  DETAILED = 'DETAILED',
  NORMAL = 'NORMAL',
  PROTOTYPE = 'PROTOTYPE'
}

interface PrintQualitySpeedMap {
  [PrintQuality.DETAILED]: number;
  [PrintQuality.NORMAL]: number;
  [PrintQuality.PROTOTYPE]: number;
}

export const PRINT_QUALITY_SPEED_MULTIPLIER: PrintQualitySpeedMap = {
  [PrintQuality.DETAILED]: 2.0,
  [PrintQuality.NORMAL]: 1.0,
  [PrintQuality.PROTOTYPE]: 0.75,
};
