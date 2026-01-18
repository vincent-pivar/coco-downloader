import { MusicProvider } from '@/types/music';
import { GequbaoProvider } from './impl/gequbao';
import { QQMp3Provider } from './impl/qqmp3';

const providers: Record<string, MusicProvider> = {
  gequbao: new GequbaoProvider(),
  qqmp3: new QQMp3Provider(),
};

export function getProvider(name: string = 'gequbao'): MusicProvider {
  return providers[name] || providers['gequbao'];
}

export function getAllProviders(): MusicProvider[] {
  return Object.values(providers);
}
