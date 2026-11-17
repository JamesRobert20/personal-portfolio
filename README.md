# Personal Portfolio

My personal portfolio site: a short intro, the projects I've built, and the tools I work with.

Built with Next.js 14 (App Router) and TypeScript.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Landing page with hero and intro |
| `/projects` | Project showcase (Markethub TZ, Greenorum, Campus Buddy, this portfolio) |
| `/techstack` | Front end and back end technologies, each linking to its official site |
| `/inquiries` | Contact page (placeholder, still to be built) |

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) and [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/) with Emotion for components and icons
- [Sass](https://sass-lang.com/) (SCSS modules) for custom styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Swiper](https://swiperjs.com/) for carousels
- [`@aws-sdk/cloudfront-signer`](https://www.npmjs.com/package/@aws-sdk/cloudfront-signer) for signed CloudFront image URLs

## Getting started

### Prerequisites

- Node.js 18.17 or newer
- [Yarn](https://yarnpkg.com/) (the repo ships a `yarn.lock`)

### Install and run

```bash
git clone https://github.com/JamesRobert20/personal-portfolio.git
cd personal-portfolio
yarn install
```

Create a `.env.local` file in the project root (see [Environment variables](#environment-variables)), then start the dev server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the development server |
| `yarn build` | Create a production build |
| `yarn start` | Serve the production build |
| `yarn lint` | Run ESLint via `next lint` |

## Environment variables

Most images (project screenshots, tech icons, hero and profile photos) are served from CloudFront using signed URLs. The signing happens on the server, so the key never reaches the browser.

| Variable | Description |
| --- | --- |
| `CLOUDFRONT_KEY_PAIR_ID` | ID of the CloudFront public key used for signing |
| `CLOUDFRONT_PRIVATE_KEY` | The matching private key, as PEM text. Newlines can be written as `\n` so the key fits on one line |

Example `.env.local`:

```bash
CLOUDFRONT_KEY_PAIR_ID=KXXXXXXXXXXXXX
CLOUDFRONT_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"
```

Never commit these values. `.env*.local` files are already git-ignored.

Both variables are currently required: the app throws at startup if either is missing. If signing a URL fails after that, the image falls back to the copy in `public/images`.

## Project structure

```
public/images/          Local copies of project screenshots, tech icons and hero images
src/
  app/
    (home)/             Landing page (hero, personal image, right-hand content)
    projects/           Projects page and its view components
    techstack/          Tech stack page and technology cards
    inquiries/          Contact page
    Navbar/             Site navigation
    layout.tsx          Root layout
    LayoutComponent.tsx Layout shell shared across pages
  components/           Shared UI (AnimatedHeading, Container, Logo, ResponsiveImage, slide-in wrappers)
  contexts/             App-wide React context
  hooks/                useAppContext, useWindowSize
  lib/
    helpers/            Project and tech stack data, plus the image URL helper
    types/              Shared TypeScript types
```

## Updating content

- **Projects:** edit `src/lib/helpers/projects.ts`.
- **Technologies:** edit `src/lib/helpers/techstack.ts`.
- **New images:** add the file to the CloudFront bucket (under the `Personal` folder) and to `public/images`. Then register the filename in `AssetImageNames` in `src/lib/helpers/index.ts` and reference it with `getLink("<key>")`.

Remote images come from `cloud.markethubtz.com`, which is allow-listed in `next.config.mjs`.

## Deployment

Any host that supports Next.js 14 works. Set `CLOUDFRONT_KEY_PAIR_ID` and `CLOUDFRONT_PRIVATE_KEY` in the host's environment settings before building, since the build needs them.
