import type { PluginListenerHandle } from '@capacitor/core';

export interface UDPPlugin {
  create(options?: {
    properties?: { name?: string; bufferSize?: number };
  }): Promise<{ socketId: number; ipv4: string; ipv6: string }>;

  update(options: {
    socketId: number;
    properties: { name?: string; bufferSize?: number };
  }): Promise<any>;

  setPaused(options: { socketId: number; paused: boolean }): Promise<any>;

  bind(options: {
    socketId: number;
    address: string;
    port: number;
  }): Promise<any>;

  send(options: {
    socketId: number;
    address: string;
    port: number;
    buffer: string;
  }): Promise<any>;

  closeAllSockets(): Promise<any>;

  close(options: { socketId: number }): Promise<any>;

  getInfo(options: {
    socketId: number;
  }): Promise<{
    socketId: number;
    bufferSize: number;
    name: string | null;
    paused: boolean;
    localAddress?: string;
    localPort?: number;
  }>;

  getSockets(): Promise<{
    sockets: [
      {
        socketId: number;
        bufferSize: number;
        name: string | null;
        paused: boolean;
        localAddress?: string;
        localPort?: number;
      },
    ];
  }>;

  joinGroup(options: { socketId: number; address: string }): Promise<any>;

  leaveGroup(options: { socketId: number; address: string }): Promise<any>;

  setMulticastTimeToLive(options: {
    socketId: number;
    ttl: number;
  }): Promise<any>;

  setBroadcast(options: { socketId: number; enabled: boolean }): Promise<any>;

  setMulticastLoopbackMode(options: {
    socketId: number;
    enabled: boolean;
  }): Promise<any>;

  getJoinedGroups(): Promise<{ groups: [string] }>;

  addListener(
    events: 'receive',
    functions: (params: { socketId: number; buffer: string }) => void,
  ): PluginListenerHandle;

  addListener(
    events: 'receiveError',
    functions: (params: string) => void,
  ): PluginListenerHandle;
}
