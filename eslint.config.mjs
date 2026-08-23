import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

/**
 * `eslint-config-next` v16 ships flat config directly — no `FlatCompat`, which
 * throws on this version.
 */
const config = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: ['out/**', '.next/**', 'vendor/**', 'next-env.d.ts'],
  },
];

export default config;
