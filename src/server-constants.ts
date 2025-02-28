import { loadEnv } from 'vite'

// 環境変数を読み込む
// process.env.NODE_ENVがundefinedの場合は'development'を使用
const mode = process.env.NODE_ENV || 'development'
const env = loadEnv(mode, process.cwd(), '')

export const NOTION_API_SECRET = env.NOTION_API_SECRET || ''
export const DATABASE_ID = env.DATABASE_ID || ''

export const CUSTOM_DOMAIN = env.CUSTOM_DOMAIN || '' // <- Set your costom domain if you have. e.g. alpacat.com
export const BASE_PATH = env.BASE_PATH || '' // <- Set sub directory path if you want. e.g. /docs/

export const PUBLIC_GA_TRACKING_ID = env.PUBLIC_GA_TRACKING_ID
export const NUMBER_OF_POSTS_PER_PAGE = 12
export const REQUEST_TIMEOUT_MS = parseInt(
  env.REQUEST_TIMEOUT_MS || '10000',
  10
)
export const ENABLE_LIGHTBOX = env.ENABLE_LIGHTBOX
