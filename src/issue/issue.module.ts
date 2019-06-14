import { Module } from '@nestjs/common';
import { IssueService } from './entity/issue.service';
import { IssueController } from './controller/issue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from './entity/issue.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Issue]),
  ],
  providers: [IssueService],
  controllers: [IssueController]
})
export class IssueModule {}
