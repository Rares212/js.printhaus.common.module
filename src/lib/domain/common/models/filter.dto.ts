import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class FilterDTO {
    @IsString()
    @IsNotEmpty()
    field: string;

    @IsDefined()
    value: any;

    @IsDefined()
    operator: 'EQUALS' | 'LIKE' | 'IN' | 'GT' | 'LT';

    constructor(field: string, value: any, operator: 'EQUALS' | 'LIKE' | 'IN' | 'GT' | 'LT') {
        this.field = field;
        this.value = value;
        this.operator = operator;
    }
}
