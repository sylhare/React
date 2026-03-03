import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    TEST_DYNAMIC_ENV: process.env.TEST_DYNAMIC_ENV ?? 'NOT_SET',
  });
}
