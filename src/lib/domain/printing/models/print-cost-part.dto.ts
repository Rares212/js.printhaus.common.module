import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DineroObject } from "dinero.js";

export class PrintCostPartDto {
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    reason: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    details: string;

    @IsDefined()
    cost: DineroObject;

    constructor(
        reason: string,
        details: string,
        cost: DineroObject
    ) {
        this.reason = reason;
        this.details = details;
        this.cost = cost;
    }
}
