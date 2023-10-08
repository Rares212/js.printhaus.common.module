import {
    IsInt,
    IsOptional,
    Min, ValidateNested
} from "class-validator";
import { FilterDTO } from "./filter.dto";
import { Type } from "class-transformer";

export class PaginatedRequestDto {

    @Type(() => Number)
    @IsInt()
    @Min(0)
    page: number;

    @Type(() => Number)
    @IsInt()
    @Min(0)
    pageSize: number;

    @IsOptional()
    @ValidateNested()
    searchTerms?: FilterDTO[];

    @IsOptional()
    sortBy?: string;

    @IsOptional()
    sortDirection?: 'ASC' | 'DESC';

    constructor(page: number, pageSize: number, searchTerms?: FilterDTO[], sortBy?: string, sortDirection?: "ASC" | "DESC") {
        this.page = page;
        this.pageSize = pageSize;
        this.searchTerms = searchTerms;
        this.sortBy = sortBy;
        this.sortDirection = sortDirection;
    }
}
