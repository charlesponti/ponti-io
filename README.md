<div align="center">
  <h1>🔋 create-ponti-ui</h1>
  <p>Next.js + Tailwind CSS + TypeScript starter packed with useful development features.</p>
  <p>Made by <a href="https://twitter.com/thechaseponti">thechaseponti</a></p>
  
  <!-- [![github test](https://github.com/charlesponti/ponti-io/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/charlesponti/ponti-io/actions/workflows/test.yml) -->
  [![codecov](https://codecov.io/gh/charlesponti/ponti-io/branch/main/graph/badge.svg?token=365VCE2C4N)](https://codecov.io/gh/charlesponti/ponti-io)
  [![cypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ssvz5r&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ssvz5r/runs)
  [![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
  [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)  
  [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=charlesponti_ponti-io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=charlesponti_ponti-io)
  [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=charlespont_ponti-io&metric=bugs)](https://sonarcloud.io/dashboard?id=charlesponti_ponti-io)
  [![Depfu](https://badges.depfu.com/badges/fc6e730632ab9dacaf7df478a08684a7/overview.svg)](https://depfu.com/github/charlesponti/ponti-io/?project_id=30160)
  [![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)
</div>

## Features

This repository is 🔋 battery packed with:

- ⚡️ Next.js 12
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 🧪 Vitest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `src/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please` workflow
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 🗺 Site Map — Automatically generate sitemap.xml

## Getting Started

### 1. Clone this template using one of the three ways:

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too 😄

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/charlesponti/ponti-io/ project-name
   ```

3. Using `degit`

   ```bash
   npx degit charlesponti/ponti-io/ YOUR_APP_NAME
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

Are you using this starter? Please add your page (and repo) to the end of the list via a [Pull Request](https://github.com/charlesponti/ponti-io/edit/main/README.md). 😃

## Expansion Pack 📦

This starter is now equipped with an [expansion pack](https://github.com/theodorusclarence/expansion-pack).

You can easily add expansion such as React Hook Form + Components, Storybook, and more just using a single command line.

https://user-images.githubusercontent.com/55318172/146631994-e1cac137-1664-4cfe-950b-a96decc1eaa6.mp4

Check out the [expansion pack repository](https://github.com/theodorusclarence/expansion-pack) for the commands
