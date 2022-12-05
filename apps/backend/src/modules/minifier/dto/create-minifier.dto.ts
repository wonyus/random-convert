import { IsNotEmpty } from 'class-validator';

export class CreateMinifierDto {

    @IsNotEmpty()
    readonly language: string;

    @IsNotEmpty()
    readonly status: string;
}
