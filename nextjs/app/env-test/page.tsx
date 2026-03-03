import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

async function getServerSideProps() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = host?.startsWith('localhost') ? 'http' : 'https';
  const res = await fetch(`${protocol}://${host}/api/env`, { cache: 'no-store' });
  return res.json() as Promise<{ TEST_DYNAMIC_ENV: string }>;
}

export default async function EnvTestPage() {
  const testEnv = process.env.TEST_ENV ?? 'NOT_SET';
  const publicTestEnv = process.env.NEXT_PUBLIC_TEST_ENV ?? 'NOT_SET';
  const serverSideProps = await getServerSideProps();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-2xl rounded-xl bg-white p-8 shadow dark:bg-zinc-900">
        <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Env Variable Test</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              <th className="py-2 pr-8 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">Variable</th>
              <th className="py-2 pr-8 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">Read on</th>
              <th className="py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            <tr>
              <td className="py-2 pr-8 font-mono text-sm font-semibold">TEST_ENV</td>
              <td className="py-2 pr-8 text-sm text-zinc-500">Server (direct)</td>
              <td className="py-2 font-mono text-sm">{testEnv}</td>
            </tr>
            <tr>
              <td className="py-2 pr-8 font-mono text-sm font-semibold">TEST_DYNAMIC_ENV</td>
              <td className="py-2 pr-8 text-sm text-zinc-500">Server (getServerSideProps)</td>
              <td className="py-2 font-mono text-sm">{serverSideProps.TEST_DYNAMIC_ENV}</td>
            </tr>
            <tr>
              <td className="py-2 pr-8 font-mono text-sm font-semibold">NEXT_PUBLIC_TEST_ENV</td>
              <td className="py-2 pr-8 text-sm text-zinc-500">Server (build-time)</td>
              <td className="py-2 font-mono text-sm">{publicTestEnv}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
