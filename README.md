<div align="center">
  <h1>๐ create-ponti-ui</h1>
  <p>Next.js + Tailwind CSS + TypeScript starter packed with useful development features.</p>
  <p>Made by <a href="https://twitter.com/thechaseponti">thechaseponti</a></p>
  
  
  [![CodeFactor](https://www.codefactor.io/repository/theponti/create-ponti-ui/badge/main)](https://www.codefactor.io/repository/github/theponti/create-ponti-ui/overview/main)
  [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=theponti_create-ponti-ui&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=theponti_create-ponti-ui)
  [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=theponti_create-ponti-ui&metric=bugs)](https://sonarcloud.io/dashboard?id=theponti_create-ponti-ui)
  [![GitHub Repo stars](https://img.shields.io/github/stars/theponti/create-ponti-ui/)](https://github.com/theponti/create-ponti-ui/stargazers)
  
  [![Depfu](https://badges.depfu.com/badges/fc6e730632ab9dacaf7df478a08684a7/overview.svg)](https://depfu.com/github/theponti/create-ponti-ui/?project_id=30160)
  [![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)
</div>

## Features

This repository is ๐ battery packed with:

- โก๏ธ Next.js 12
- โ๏ธ React 18
- โจ TypeScript
- ๐จ Tailwind CSS 3 โ Configured with CSS Variables to extend the **primary** color
- ๐ Pre-built Components โ Components that will **automatically adapt** with your brand color, [check here for the demo](https://tsnext-tw.thcl.dev/components)
- ๐งช Vitest โ Configured for unit testing
- ๐ Absolute Import and Path Alias โ Import components using `src/` prefix
- ๐ ESLint โ Find and fix problems in your code, also will **auto sort** your imports
- ๐ Prettier โ Format your code consistently
- ๐ถ Husky & Lint Staged โ Run scripts on your staged files before they are committed
- ๐ค Conventional Commit Lint โ Make sure you & your teammates follow conventional commit
- โฐ Release Please โ Generate your changelog by activating the `release-please` workflow
- ๐ท Github Actions โ Lint your code on PR
- ๐ Automatic Branch and Issue Autolink โ Branch will be automatically created on issue **assign**, and auto linked on PR
- ๐ฅ Snippets โ A collection of useful snippets
- ๐ Default Open Graph โ Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- ๐บ Site Map โ Automatically generate sitemap.xml
- ๐ฆ Expansion Pack โ Easily install common libraries, additional components, and configs

See the ๐ [feature details and changelog](https://github.com/theponti/create-ponti-ui/blob/main/CHANGELOG.md) ๐ for more.

## Getting Started

### 1. Clone this template using one of the three ways:

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too ๐

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/theponti/create-ponti-ui/ project-name
   ```

3. Using `degit`

   ```bash
   npx degit theponti/create-ponti-ui/ YOUR_APP_NAME
   ```

4. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheponti%2Fcreate-ponti-ui)

### 2. Install dependencies

It is encouraged to use **pnpm** so the husky hooks can work properly.

```bash
pnpm install
```

### 3. Run the development server

You can start the server using this command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Projects using create-ponti-ui

<!--
TEMPLATE
- [sitename](https://sitelink.com) ([Source](https://github.com/githublink))
- [sitename](https://sitelink.com)
-->

Are you using this starter? Please add your page (and repo) to the end of the list via a [Pull Request](https://github.com/theponti/create-ponti-ui/edit/main/README.md). ๐

## Expansion Pack ๐ฆ

This starter is now equipped with an [expansion pack](https://github.com/theodorusclarence/expansion-pack).

You can easily add expansion such as React Hook Form + Components, Storybook, and more just using a single command line.

https://user-images.githubusercontent.com/55318172/146631994-e1cac137-1664-4cfe-950b-a96decc1eaa6.mp4

Check out the [expansion pack repository](https://github.com/theodorusclarence/expansion-pack) for the commands
