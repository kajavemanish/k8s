import { IsString } from 'class-validator';

export class CreateIssueDto {
    @IsString()
    name: string;

    @IsString()
    Subject: string;

    @IsString()
    description: string;

    @IsString()
    createdBy: string;

    @IsString()
    createdById: string;

    @IsString()
    createdOn: string;

    @IsString()
    status: string;

    @IsString()
    comment: string;

    @IsString()
    total: number;

}
