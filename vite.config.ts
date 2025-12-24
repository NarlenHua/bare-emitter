import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import info from './package.json' with { type: 'json' };

export default defineConfig({
  define: {
    __NAME__: JSON.stringify(info.name),
    __VERSION__: JSON.stringify(info.version),
    __DESCRIPTION__: JSON.stringify(info.description),
    __AUTHOR__: JSON.stringify(info.author),
    __LICENSE__: JSON.stringify(info.license),
    __REPOSITORY__: JSON.stringify(info.repository),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [dts({ rollupTypes: true, insertTypesEntry: true })],
  build: {
    target: ["edge130", "firefox130", "chrome130", "safari18.0"],
    lib: {

      entry: "./src/main.ts",
      // name: `${info.name.replace('-', '')}`,
      name: 'BareEmitter',
      // formats: ['es', 'cjs', 'umd', 'iife'],
      formats: ["es", "iife"],
      // formats: ["iife"],
      fileName: (format, entryName) => {
        return `${info.name}.${format}.js`;
      },
    },
    minify: "terser",
    terserOptions: {
      // 删除所有注释，包括 license 注释
      format: {
        comments: false,
      },

      compress: {
        // 删除命令台输出
        drop_console: true,
        drop_debugger: true,
      },
    }
  },
});
