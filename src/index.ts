import { registerPlugin } from '@capacitor/core';

import type { UDPPlugin } from './definitions';

const UDP = registerPlugin<UDPPlugin>('UDP', {
  web: () => import('./web').then(m => new m.UDPWeb()),
});

export * from './definitions';
export { UDP };
