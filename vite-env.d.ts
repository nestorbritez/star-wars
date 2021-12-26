/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_URL: string
  readonly VITE_DETAIL_PAGE_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
