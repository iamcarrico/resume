import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

const stylesheetsPath = fileURLToPath(new URL('./src/assets/stylesheets', import.meta.url));

export default defineConfig({
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: [stylesheetsPath],
          additionalData: `@import "variables";`,
          silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
        },
      },
    },
  },
});
