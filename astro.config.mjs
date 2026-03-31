import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const stylesheetsPath = fileURLToPath(new URL('./src/assets/stylesheets', import.meta.url));

function cspHeadersIntegration() {
  return {
    name: 'csp-headers',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distPath = fileURLToPath(dir);
        const htmlPath = join(distPath, 'index.html');
        const headersPath = join(distPath, '_headers');

        const html = readFileSync(htmlPath, 'utf-8');

        // Extract all inline script contents.
        const hashes = [];
        const scriptRegex = /<script(?:\s[^>]*)?>([^<]+)<\/script>/g;
        let match;
        while ((match = scriptRegex.exec(html)) !== null) {
          const content = match[1];
          const hash = createHash('sha256').update(content).digest('base64');
          hashes.push(`'sha256-${hash}'`);
        }

        const cspSources = ["'self'", ...hashes].join(' ');
        const cspLine = `  Content-Security-Policy: default-src ${cspSources};`;

        const headers = readFileSync(headersPath, 'utf-8');
        const updated = headers.replace(
          /^\s*Content-Security-Policy:.*$/m,
          cspLine
        );
        writeFileSync(headersPath, updated);

        console.log(`[csp-headers] Injected ${hashes.length} script hash(es) into _headers.`);
      },
    },
  };
}

export default defineConfig({
  output: 'static',
  integrations: [cspHeadersIntegration()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [stylesheetsPath],
          additionalData: `@use "variables" as *;`,
          silenceDeprecations: ['global-builtin', 'color-functions'],
        },
      },
    },
  },
});
