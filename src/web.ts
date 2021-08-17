import { WebPlugin } from '@capacitor/core';

import type { UDPPlugin } from './definitions';

export class UDPWeb extends WebPlugin implements UDPPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
