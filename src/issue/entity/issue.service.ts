import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from 'src/issue/entity/issue.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class IssueService {
    constructor(
        @InjectRepository(Issue)
        private issueRepository: Repository<Issue>,
    ) { }
    async  findAll(): Promise<Issue[]> {
        return await this.issueRepository.find();
    }

    async  create(Issue: Issue): Promise<Issue> {
        return await this.issueRepository.save(Issue);
    }

    async update(Issue: Issue): Promise<UpdateResult> {
        return await this.issueRepository.update(Issue.id, Issue);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.issueRepository.delete(id);
    }
    
    getRepository(){
        return this.issueRepository;
    }
}

