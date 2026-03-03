import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@transifex/native', '@transifex/react'],
  env: {
    // NEXT_PUBLIC_* variables are baked into the JS bundle at build time by Next.js.
    // They are accessible in both server and client components, but the value is fixed
    // at build time — exporting a different value before `next start` has no effect.
    NEXT_PUBLIC_TEST_ENV: process.env.NEXT_PUBLIC_TEST_ENV,
    // Variables listed here behave the same way as NEXT_PUBLIC_* ones: their value is
    // captured at build time and inlined into the bundle. The difference is that without
    // the NEXT_PUBLIC_ prefix they are NOT available in client (browser) code unless
    // explicitly listed here. To read a truly runtime value on the server, remove the
    // variable from this `env` block — Next.js will then read it from process.env at
    // request time instead of replacing it with the build-time literal.
    TEST_ENV: process.env.TEST_ENV,
    // TEST_DYNAMIC_ENV: process.env.TEST_DYNAMIC_ENV,
    // ^ Intentionally commented out. Adding it here would bake its value into the bundle
    // at build time, causing getServerSideProps (or any dynamic fetch) to return the
    // build-time value instead of the current runtime value.
  },
};

export default nextConfig;
