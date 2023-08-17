import { IsNotEmpty, IsString } from "class-validator";
import { AutoMap } from "@automapper/classes";

export class DictionaryValueDto {

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    key: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    value: string;
}
