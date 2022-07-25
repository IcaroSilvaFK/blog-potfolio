import { NextResponse, NextRequest } from 'next/server';

const api_key = process.env.NEXT_PUBLIC_KEY_UPSTASH;
const api_url = process.env.NEXT_PUBLIC_API_URL as string;

export const config = {
  matcher: '/',
};

export async function middleware(request: NextRequest) {
  const { result } = await fetch(api_url, {
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  }).then((resp) => resp.json());

  if (result !== 'true') {
    return NextResponse.redirect(new URL('/error', request.url));
  }
}
