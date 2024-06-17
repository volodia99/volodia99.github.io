This is a [Next.js](https://nextjs.org/) project forked and and adapted from https://github.com/kvnol/kevinoliveira.com.br

## Getting Started

If you want to fork/clone this project to build/deploy your own github page, you can first try to run the development server locally, using a Node version manager like [npm](https://github.com/nvm-sh/nvm).

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the files and directories inside the `src/pages` directory. The page auto-updates as you edit these files. All images and files are located in the `public` directory.

For the automatic build and deploy, go to the `Settings/Pages` section of you git repository and choose to "Deploy from a branch" different from `master` (for example a pre-existing branch `gh-pages` (root)). You can then look at the `.github/workflows/nextjs.yml` file as well as `next.config.js` (and to a lesser extent `package.json` and `package-lock.json`).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).