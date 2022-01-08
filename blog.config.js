const BLOG = {
  title: 'Hyupee',
  author: 'hyupee',
  email: '5656sanghup@gmail.com',
  link: 'https://hyupee.dev',
  ogImageGenerateUrl: 'https://og-image-hyupee.vercel.app',
  ogImageParam:
    'theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg',
  description: '기술로 예술을 하는 사람입니다',
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  dateLang: 'en-US', // 'en-US' | 'zh-CN' | 'zh-HK' | 'zh-TW' | 'ja-JP'
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#2f3437', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  socialLink: 'https://github.com/hyupee',
  seo: {
    keywords: [
      'hyupee',
      'javascript',
      'typescript',
      'frontend',
      'front',
      'react',
      'reactjs',
      '리액트',
      '자바스크립트',
      '협이',
      '프론트'
    ],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-86MDZ585CJ' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: utterances, cusdis
    provider: 'utterances', // leave it empty if you don't need any comment plugin
    utterancesConfig: {
      repo: 'hyupee/hyupee.dev'
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG;
