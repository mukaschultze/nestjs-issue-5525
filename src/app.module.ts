import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssueGateway } from './issue.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IssueGateway],
})
export class AppModule {}
