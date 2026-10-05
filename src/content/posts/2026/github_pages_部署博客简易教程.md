---
title: 'github pages 部署博客简易教程'
description: '记录自己部署博客的细节'
pubDate: 2026-09-26
author: 'duiyakid'
cover: 硬盘爆炸后回归-cover.png
recommend: false
tags: ['2026', 'Web']
license: 'CC-BY-NC-SA-4.0'
---

# 仓库

## 主站

主站的仓库名必须是 `github用户名.github.io`

创建好后前往仓库的 `Setting -> Pages -> Branch` 设置好网站根目录

勾选下方 `Enforce HTTPS` 后就会自动生成 SSL 证书（可能需要等一天）

然后主站就能在 `github用户名.github.io` 上访问了

## 项目站

项目站仓库名随意

仿照主站设置好 Branch 后可以在

`github用户名.github.io/仓库名` 中访问

# 域名

假设在 [dynadot](dynadot.com) 上购买了一个域名`abc.com`

在 dynadot 上打开 `我的域名 -> 管理域名 -> 对应域名的DNS设置 `

选择 `Dynadot DNS`，即使用域名服务商的 DNS 服务器。

**域名记录**填写四个

记录类型都是 `A`

`IP地址/目的地` 分别填写下面四个

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**子域名记录**填写

**子域名**：www

**记录类型**：CNAME

**IP 地址/目的地**：主站的默认域名（`github用户名.github.io`）

随后回到仓库的 `Setting -> Pages -> Custom domain`

填写购买的域名即可，每个仓库都可填写自定义域名

如果显示访问不安全没有 SSL 证书，等一天，然后确保 `Enforce HTTPS` 开启

# 动态部署

以 astro-litos 为例

新建 `.github/workflows/deploy.yml`

```yml
name: Deploy to GitHub Pages

on:
  # 每次推送到 `main` 分支时触发这个“工作流程”
  # 如果你使用了别的分支名，请按需将 `main` 替换成你的分支名
  push:
    branches: [ main ]
  # 允许你在 GitHub 上的 Actions 标签中手动触发此“工作流程”
  workflow_dispatch:

# 允许 job 克隆 repo 并创建一个 page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v5
      - name: Install, build, and upload your site
        uses: withastro/action@v5
        # with:
          # path: . # 存储库中 Astro 项目的根位置。（可选）
          # node-version: 20 # 用于构建站点的特定 Node.js 版本，默认为 20。（可选）
          # package-manager: pnpm@latest # 应使用哪个 Node.js 包管理器来安装依赖项和构建站点。会根据存储库中的 lockfile 自动检测。（可选）
          # build-cmd: pnpm run build # 用于构建你的网站的命令。默认运行软件包的构建脚本或任务。（可选）
        # env:
          # PUBLIC_POKEAPI: 'https://pokeapi.co/api/v2' # 对变量值使用单引号。（可选）

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

.gitignore

```
# build output
dist/
# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# jetbrains setting folder
.idea/


```

修改 `astro.config.ts` 中的`export default defineConfig({`的`site: ` 为主站的域名（https://github 用户名.github.io）（要有 `https://`）

或者，如果使用了自定义域名，一定要写自定义域名（要有 `https://`）

如果是项目站则还要填写 `base: `

例如下面的官方演示

astro.config.ts

```
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/my-repo',
})
```

对于某些主题（如 litos），会在其他地方定义 `site`和`base` 的变量

astro.config.ts

```ts
import { SITE } from './src/config'

export default defineConfig({
  site: SITE.website,
  base: SITE.base,
```

此时请去对应地方修改，如上面的 `./src/config`

config.ts

```ts
export const SITE: Site = {
  title: 'duiyakid',
  description:
    '基于astro与litos构建的个人博客',
  website: 'https://duiyakid.me',
  lang: 'zh-CN',
  //--- 我用的是主站，下面的base就不填了 ---
  base: '/',
  author: 'duiyakid',
  ogImage: '/og-image.webp',
  transition: false,
  themeAnimation: true,
}
```

都设置好后，去仓库的 `Settings -> Pages -> Build and deployment -> Source `选择`Github Actions` 即可，每次推送都会自动部署

# 其他

对于评论系统，需要使用环境变量来授权，可以查一下 ai

我自己 (使用 litos) 直接选择去 `./src/config.ts` 关闭评论区

config.ts

```ts
export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
```
