export enum PrintQuality {
  DETAILED = 'DETAILED',
  NORMAL = 'NORMAL',
  PROTOTYPE = 'PROTOTYPE'
}

interface PrintQualityMap {
  [PrintQuality.DETAILED]: number;
  [PrintQuality.NORMAL]: number;
  [PrintQuality.PROTOTYPE]: number;
}

export const PRINT_QUALITY_SPEED_MULTIPLIER: PrintQualityMap = {
  [PrintQuality.DETAILED]: 2.0,
  [PrintQuality.NORMAL]: 1.0,
  [PrintQuality.PROTOTYPE]: 0.75,
};

export const PRINT_QUALITY_NORMAL_MAP_SCALE: PrintQualityMap = {
    [PrintQuality.DETAILED]: 0.1,
    [PrintQuality.NORMAL]: 0.3,
    [PrintQuality.PROTOTYPE]: 0.8,
}
