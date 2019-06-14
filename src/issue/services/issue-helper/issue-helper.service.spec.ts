import { Test, TestingModule } from '@nestjs/testing';
import { IssueHelperService } from './issue-helper.service';

describe('IssueHelperService', () => {
  let service: IssueHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssueHelperService],
    }).compile();

    service = module.get<IssueHelperService>(IssueHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
