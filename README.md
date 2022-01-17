# Procedure Website

Welcome to the repository for the website of procedure.tech. The project uses GatsbyJS and TailwindCSS for the markup and styling. It's deployed using AWS Amplify.

#### How to start developing

1. Make sure you have gatsby installed globally
   `npm install -g gatsby-cli`
2. Install the dependencies
   `yarn install`
3. Start the local development server
   `gatsby develop`

#### How to contribute

1. Make a `feature` branch from `main` branch
2. Make the changes. Test it locally
3. Raise the PR against `main` branch
4. Once approved and merged, it will be deployed

If you find any mistakes or typos, raise an issue.

### Typography Information

Typography Setup with Satoshi Font Done

Font Classes: `font-satoshi`, `font-inter`

Usable Font Weight Classes: `font-light`, `font-normal`, `font-medium`, `font-bold`, `font-black`

Please use this command in the CLI before running the project

```
npx tailwindcss build ./src/styles/global.css -o public/tailwind.css
```
