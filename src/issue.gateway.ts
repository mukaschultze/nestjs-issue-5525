import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Exclude, Expose } from 'class-transformer';
import { merge, of } from 'rxjs';

export class SerializedClass {
  @Expose()
  exposed = 'this should be exposed';
  @Exclude()
  excluded = 'this should be excluded';
}

@WebSocketGateway(80)
@UseInterceptors(ClassSerializerInterceptor)
export class IssueGateway {
  @SubscribeMessage('message')
  handleMessage() {
    return merge(
      of({ event: 'message', data: new SerializedClass() } as WsResponse), // Class doesn't get serialized
      of(new SerializedClass()), // Works fine
    );
  }
}
