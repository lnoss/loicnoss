# loicnoss.com - portfolio
[![Netlify Status](https://api.netlify.com/api/v1/badges/dc874372-7dc2-4f24-b1d7-010139cb47fd/deploy-status)](https://app.netlify.com/sites/quizzical-dubinsky-5d680a/deploys)

Static portfolio developed with **Astro**, **Tailwind** and **Bun** as runtime environment for its innate **TypeScript** support. Animations with canvas elements and vector graphics. Application of a reactive Bézier curve inspired by Oliver Larose. Continuously deployed with **Netlify**. Encryption certificate issued by **Let's Encrypt** with Netlify CLI.

## Why Bun?

Why not? My academic background and the start of my junior career was more focused on *backend* tasks (algorithms, architecture, data structure...). So I am learning by myself the *frontend* side to aim for a *fullstack* profile. But, oh heck, *frontend* ecosystem is confusing and you have the constant impression to try to mix competing standards. Layers of minification, lintification, transpilation and configuration for a near-daily-disaster. That's where Bun comes in. It is a simple, lightweight, and fast runtime environment for building applications with TypeScript support (*I enjoy type safety*). It's a zero-configuration tool that just works and that allows me to focus on the essentials: the conception and development. It is not mature, but this only a portfolio, so it is fine. Perfect type of project to test it.

You can take a look at Bun [here](https://bun.sh/) if you want to install it. Nevertheless, this project should totally works with Node.js and npm/pnpm/yarn with minimal changes.

## Why Netlify?

Why not? Nice way to learn the *serverless* approach. I am aiming for being DevOps-competent, so I need to test the different approaches. Netlify is a good way to start. It is free for our static needs, easy to use, and has a good documentation. It is also a good way to learn the *continuous deployment* approach.

But I am also an *open source* enthusiast, so I understand people who support *open source*/self-hosted solution. So I can suggest you to take a look at [Coolify](https://coolify.io/) if you want to replace Netlify. 

## 🧞 Installation & commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build production site to `./dist/`          |
| `bun run preview`         | Preview the build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |
