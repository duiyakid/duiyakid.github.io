import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'duiyakid',
  description:
    '基于astro与litos构建的个人博客',
  website: 'https://duiyakid.me',
  lang: 'zh-CN',
  base: '/',
  author: 'duiyakid',
  ogImage: '/og-image.webp',
  transition: false,
  themeAnimation: true,
}
// 顶部栏
export const HEADER_LINKS: Link[] = [
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
  {
    name: '图片',
    url: '/photos',
  },
]
// 底部栏
export const FOOTER_LINKS: Link[] = [
  {
    name: '首页',
    url: '/',
  },
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
  {
    name: '标签',
    url: '/tags',
  },
  {
    name: '图片',
    url: '/photos',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/duiyakid',
    icon: 'icon-[ri--github-fill]',
    count: 20,
  },
  {
    name: 'twitter',
    url: 'https://x.com/yourname',
    icon: 'icon-[ri--twitter-x-fill]',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com/122525598',
    icon: 'icon-[ri--bilibili-fill]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'JavaScript',
          icon: 'icon-[skill-icons--javascript]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'CSS',
          icon: 'icon-[skill-icons--css]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'HTML',
          icon: 'icon-[skill-icons--html]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[skill-icons--typescript]',
          url: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Vue',
          icon: 'icon-[skill-icons--vuejs-dark]',
          url: 'https://vuejs.org/',
        },
        {
          name: 'Sass',
          icon: 'icon-[skill-icons--sass]',
          url: 'https://sass-lang.com/',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Astro',
          icon: 'icon-[skill-icons--astro]',
          url: 'https://astro.build/',
        },
        {
          name: 'Node.js',
          icon: 'icon-[skill-icons--nodejs-dark]',
          url: 'https://nodejs.org/',
        },
        {
          name: 'React',
          icon: 'icon-[skill-icons--react-dark]',
          url: 'https://react.dev/',
        },
        {
          name: 'Next.js',
          icon: 'icon-[skill-icons--nextjs-dark]',
          url: 'https://nextjs.org/',
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[skill-icons--tailwindcss-dark]',
          url: 'https://tailwindcss.com/',
        },
        {
          name: 'Vite',
          icon: 'icon-[skill-icons--vite-dark]',
          url: 'https://vitejs.dev/',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Ubuntu',
          icon: 'icon-[skill-icons--ubuntu-dark]',
          url: 'https://ubuntu.com/',
        },
        {
          name: 'Git',
          icon: 'icon-[skill-icons--git]',
          url: 'https://git-scm.com/',
        },
        {
          name: 'MongoDB',
          icon: 'icon-[skill-icons--mongodb]',
          url: 'https://www.mongodb.com/',
        },
        {
          name: 'Vercel',
          icon: 'icon-[skill-icons--vercel-dark]',
          url: 'https://vercel.com/',
        },
        {
          name: 'VS Code',
          icon: 'icon-[skill-icons--vscode-dark]',
          url: 'https://code.visualstudio.com/',
        },
        {
          name: 'Obsidian',
          icon: 'icon-[skill-icons--obsidian-dark]',
          url: 'https://obsidian.md/',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'duiyakid',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: '文章',
  description: 'Posts by duiyakid',
  introduce: '查询固定年份的文章请使用网站底部的标签或者从文章详情页点击，归档功能正在开发',
  author: 'duiyakid',
  homePageConfig: {
    size: 2,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
  recommendText: 'REC',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
  system: 'gitalk',
  gitalk: {
    clientID: import.meta.env.PUBLIC_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.PUBLIC_GITHUB_CLIENT_SECRET,
    repo: 'duiyakid.github.io',
    owner: 'duiyakid',
    admin: ['duiyakid'],
    language: 'zh-CN',
    perPage: 5,
    pagerDirection: 'last',
    createIssueManually: false,
    distractionFreeMode: false,
    enableHotKey: true,
  },
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: '项目',
  description: 'The examples of my projects.',
  introduce: '主要发布于Github上，有些项目会有官网',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: '图片',
  description: 'Here I will record some photos taken in daily life.',
  introduce: '我也不知道这个目的是什么，后续开发可能会优化掉.',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: true,
  },
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
