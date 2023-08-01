export enum PrintStrength {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  VERY_HIGH = 'VERY_HIGH',
}

interface PrintStrengthInfillMap {
  [PrintStrength.LOW]: number;
  [PrintStrength.NORMAL]: number;
  [PrintStrength.HIGH]: number;
  [PrintStrength.VERY_HIGH]: number;
}

export const PRINT_STRENGTH_INFILL: PrintStrengthInfillMap = {
  [PrintStrength.LOW]: 0.1,
  [PrintStrength.NORMAL]: 0.2,
  [PrintStrength.HIGH]: 0.4,
  [PrintStrength.VERY_HIGH]: 0.6
};

export const INTERNAL_INFILL_WEIGHT_PERCENTAGE = 0.7;
