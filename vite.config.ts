import reactRefresh from '@vitejs/plugin-react-refresh'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import envCompatible from 'vite-plugin-env-compatible'
import reactJsx from 'vite-react-jsx'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    define: {
      'process.env': loadEnv(mode, process.cwd()),
    },
    plugins: [
      reactRefresh(),
      reactJsx(),
      tsconfigPaths(),
      envCompatible({ prefix: 'VITE' }),
    ],
  })
}
