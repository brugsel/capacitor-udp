export interface UDPPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
