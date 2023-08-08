import { IsDefined, IsString } from "class-validator";

export class FilterDTO {
    @IsDefined()
    @IsString()
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
