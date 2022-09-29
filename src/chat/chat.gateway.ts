import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ transports: ['websocket'] })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss: Server;

  constructor() {}

  handleConnection(client: Socket, ...args: any[]) {}

  handleDisconnect(client: Socket) {}

  @SubscribeMessage('one_to_one')
  handleOneToOneMessage(client: Socket, payload: any) {}

  @SubscribeMessage('one_to_all')
  handleOneToAllmMessage(client: Socket, payload: any) {}

  @SubscribeMessage('one_to_all_room')
  handleOneToAllRoomMessage(client: Socket, payload: any) {}

  @SubscribeMessage('create_room')
  handleCreateRoom(client: Socket, payload: any) {}

  @SubscribeMessage('delete_room')
  handleDeleteRoomMessage(client: Socket, payload: any) {}
}
