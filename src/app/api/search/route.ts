import { NextRequest, NextResponse } from 'next/server';
import { getProvider, getAllProviders } from '@/lib/providers';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get('q');
  const providerName = searchParams.get('provider');

  if (!q) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }

  let items = [];

  if (providerName && providerName !== 'all') {
    const provider = getProvider(providerName);
    items = await provider.search(q);
  } else {
    // Search all providers in parallel
    const providers = getAllProviders();
    const results = await Promise.all(
      providers.map(p => p.search(q).catch(err => {
        console.error(`Provider ${p.name} search error:`, err);
        return [];
      }))
    );
    items = results.flat();
  }

  return NextResponse.json({ items });
}
