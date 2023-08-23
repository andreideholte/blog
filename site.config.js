const CONFIG = {
  // profile setting (required)
  profile: {
    name: "deholte",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Documentando experiências",
    bio: "Olá, meu nome é Andrei e este é um blog construído para guardar alguns pensamentos e experiências que tenho vivido nessa longa jornada de desenvolvimento de aplicações.",
    email: "andreideholte@gmail.com",
    linkedin: "andreideholte",
    github: "andreideholte",
    instagram: "andreideholte",
  },
  projects: [
    {
      icon: '🤠',
      name: `Martin Fowler`,
      href: "https://martinfowler.com/",
    },
    {
      icon: '/tw',
      name: `Thoughtworks`,
      href: "https://www.thoughtworks.com/pt-br/insights/blog",
    },
    {
      icon: 'G',
      name: `Gartner`,
      href: "https://www.gartner.com.br/pt-br/tecnologia-da-informacao",
    },
    {
      icon: '🦝',
      name: `Refactoring Guru`,
      href: "https://refactoring.guru/pt-br/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "deholte",
    description: "Bem vindo!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      "issue-term": "og:title",
      label: "💬 Comentários",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
