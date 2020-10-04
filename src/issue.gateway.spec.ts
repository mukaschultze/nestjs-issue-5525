import { Test, TestingModule } from '@nestjs/testing';
import { IssueGateway } from './issue.gateway';

describe('IssueGateway', () => {
  let gateway: IssueGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssueGateway],
    }).compile();

    gateway = module.get<IssueGateway>(IssueGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
