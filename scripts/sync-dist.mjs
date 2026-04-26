import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const sourceDir = resolve('website', 'dist')
const targetDir = resolve('dist')

if (!existsSync(sourceDir)) {
  throw new Error(`Expected build output at ${sourceDir}`)
}

rmSync(targetDir, { recursive: true, force: true })
mkdirSync(targetDir, { recursive: true })
cpSync(sourceDir, targetDir, { recursive: true })
